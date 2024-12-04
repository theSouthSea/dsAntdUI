import * as d3 from "d3"
import { useEffect, useRef } from "react"

import styles from "./index.module.less"

const D3BrainMap = (props) => {
  const { data, width = 800, height = 600 } = props
  // const svgRef = useRef<SVGSVGElement>(null)
  const svgContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // 创建SVG容器
    const svg = d3
      .select(svgContainerRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)

    // 定义布局
    // tree(): Creates a new tree layout with default settings.
    const treemap = d3.tree().size([width, height])

    // 计算节点和连接线的位置
    // 层次布局
    /**
     The returned root node and each descendant has the following properties:
      node.data - the associated data as passed to hierarchy
      node.depth - zero for the root, increasing by one for each descendant generation
      node.height - the greatest distance from any descendant leaf, or zero for leaves
      node.parent - the parent node, or null for the root node
      node.children - an array of child nodes, if any, or undefined for leaves
      node.value - the optional summed value of the node and its descendants
      This method can also be used to test if a node is an instanceof d3.hierarchy and to extend the node prototype.
     **/
    const root = d3.hierarchy(data)
    /**
    tree(root)
    Source · Lays out the specified root hierarchy, assigning the following properties on root and its descendants:
    node.x - the x-coordinate of the node
    node.y - the y coordinate of the node
    **/
    const nodes = treemap(root)
    /**
     node.links()
      Source · Returns an array of links for this node and its descendants, 
      where each link is an object that defines source and target properties. 
      The source of each link is the parent node, and the target is a child node.
     **/

    // 绘制连接线
    svg
      .selectAll("." + styles.link)
      .data(root.links())
      .enter()
      .append("path")
      .attr("class", styles.link)
      .attr(
        "d",
        d3
          .linkHorizontal()
          .x((d) => d.y)
          .y((d) => d.x),
      )

    // 绘制节点
    const node = svg
      .selectAll("." + styles.node)
      .data(nodes.descendants())
      .enter()
      .append("g")
      .attr("class", styles.node)
      .attr("transform", (d) => `translate(${d.y},${d.x})`)

    node.append("circle").attr("r", 10)

    node
      .append("text")
      .attr("dy", ".35em")
      .attr("x", (d) => (d.children ? -13 : 13))
      .style("text-anchor", (d) => (d.children ? "end" : "start"))
      .text((d) => d.data.name)

    // 实现节点编辑功能
    node.on("click", function (event, d) {
      console.log("event,d=", event, d)

      const nodeText = d3.select(this).select("text")
      const oldText = nodeText.text()
      const newText = prompt("请输入新的节点名称：", oldText)
      if (newText !== null && newText !== oldText) {
        nodeText.text(newText)
        // 获取修改后的数据
        const modifiedData = d3.select(this).datum()
        console.log("Modified Data:", modifiedData)
      }
    })
    // 获取节点修改后,整个脑图的数据
    node.on("click", function (event, d) {
      console.log("event,d=", event, d)

      const nodeText = d3.select(this).select("text")
      const oldText = nodeText.text()
      const newText = prompt("请输入新的节点名称：", oldText)
      if (newText !== null && newText !== oldText) {
        nodeText.text(newText)

        // 更新数据
        d.data.name = newText
        // 更新节点的大小和位置
        // 重新计算文本宽度
        const textWidth = nodeText.node().getComputedTextLength()

        // 调整节点的大小以适应文本宽度
        d3.select(this)
          .select("circle")
          .attr("r", textWidth / 2 + 5)

        // 更新节点的位置
        const x = d.y
        const y = d.x
        d3.select(this).attr("transform", `translate(${x},${y})`)
        // 重新计算根节点的层次结构
        // const updatedRoot = d3.hierarchy(data)
        // const updatedNodes = treemap(updatedRoot)

        // 获取修改后的数据
        // const modifiedData = updatedRoot.descendants()
        // console.log('Modified Data:', modifiedData)
      }
    })
    return () => {
      // 清理SVG容器
      svg.remove()
    }
  }, [data, height, width])
  return <div ref={svgContainerRef}></div>
}
export default D3BrainMap
