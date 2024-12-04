export const treeDataSimple = [
  {
    title: "Parent 1",
    value: "parent 1",
    children: [
      {
        title: "Child 1",
        value: "child 1",
      },
      {
        title: "Child 2",
        value: "child 2",
      },
    ],
  },
  {
    title: "Parent 2",
    value: "parent 2",
    children: [
      {
        title: "Child 3",
        value: "child 3",
      },
      {
        title: "Child 4",
        value: "child 4",
      },
    ],
  },
]
export const treeData = [
  {
    departmentId: "1001",
    departmentName: "研发部",
  },
  {
    departmentId: "1002",
    departmentName: "市场部",
  },
  {
    departmentId: "1003",
    departmentName: "财务部",
  },
  {
    departmentId: "100101",
    departmentName: "前端开发组",
    parentDepartmentId: "1001",
  },
  {
    departmentId: "100102",
    departmentName: "后端开发组",
    parentDepartmentId: "1001",
  },
  {
    departmentId: "100201",
    departmentName: "市场策划组",
    parentDepartmentId: "1002",
  },
  {
    departmentId: "100202",
    departmentName: "销售组",
    parentDepartmentId: "1002",
  },
  {
    departmentId: "100301",
    departmentName: "会计组",
    parentDepartmentId: "1003",
  },
  {
    departmentId: "100302",
    departmentName: "审计组",
    parentDepartmentId: "1003",
  },
]
/* 将输入的扁平化数组转换成树形数组 */
export const getTree = (flatTree: any) => {
  const tree: any = []
  const map: any = {}
  for (let i = 0; i < flatTree.length; i++) {
    const node = flatTree[i]
    node.children = []
    map[node.departmentId] = i
  }
  for (let i = 0; i < flatTree.length; i++) {
    const node = flatTree[i]
    const parentId = node.parentDepartmentId
    if (parentId && map[parentId] !== undefined) {
      const parentNode = flatTree[map[parentId]]
      parentNode.children.push(node)
    } else {
      tree.push(node)
    }
  }
  return tree
}

/* 将输入的树形数据扁平化,整理成Select的数据源 */
export const getFlatTree = (treeData: any) => {
  const flatTree: any = []
  const traverse = (tree: any) => {
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i]
      flatTree.push({
        value: node.departmentId,
        label: node.departmentName,
      })
      if (node.children) {
        traverse(node.children)
      }
    }
  }
  traverse(treeData)
  return flatTree
}
