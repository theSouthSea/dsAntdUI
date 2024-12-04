// 定义数据结构
export const treeData = {
  name: "Root",
  children: [
    {
      name: "Node 1",
      children: [{ name: "Node 1.1" }, { name: "Node 1.2" }],
    },
    {
      name: "Node 2",
      children: [{ name: "Node 2.1" }, { name: "Node 2.2" }],
    },
  ],
}
/* 生成ES6知识脑图 */
export const es6TreeData = {
  name: "ES6 知识脑图",
  key: "1",
  children: [
    {
      name: "ES6 基础知识",
      key: "1-1",
      children: [
        {
          name: "ES6 变量声明",
          key: "1-1-1",
        },
        {
          name: "ES6 函数声明",
          key: "1-1-2",
        },
        {
          name: "ES6 箭头函数",
          key: "1-1-3",
        },
      ],
    },
    {
      name: "ES6 进阶知识",
      key: "1-2",
      children: [
        {
          name: "ES6 模块",
          key: "1-2-1",
        },
        {
          name: "ES6 迭代器",
          key: "1-2-2",
        },
        {
          name: "ES6 生成器",
          key: "1-2-3",
        },
      ],
    },
  ],
}
/* 生成React知识脑图 */
export const reactTreeData = {
  name: "React 知识脑图",
  key: "1",
  children: [
    {
      name: "React 基础知识",
      key: "1-1",
      children: [
        {
          name: "React 组件",
          key: "1-1-1",
        },
        {
          name: "React 生命周期",
          key: "1-1-2",
        },
        {
          name: "React 虚拟 DOM",
          key: "1-1-3",
        },
      ],
    },
    {
      name: "React 进阶知识",
      key: "1-2",
      children: [
        {
          name: "React 性能优化",
          key: "1-2-1",
        },
        {
          name: "React 高阶组件",
          key: "1-2-2",
        },
        {
          name: "React 状态管理",
          key: "1-2-3",
        },
      ],
    },
  ],
}
/* 生成vue知识结构脑图 */
export const vueTreeData = {
  name: "Vue 知识脑图",
  key: "1",
  children: [
    {
      name: "Vue 基础知识",
      key: "1-1",
      children: [
        {
          name: "Vue 组件",
          key: "1-1-1",
        },
        {
          name: "Vue 生命周期",
          key: "1-1-2",
        },
        {
          name: "Vue 虚拟 DOM",
          key: "1-1-3",
        },
      ],
    },
    {
      name: "Vue 进阶知识",
      key: "1-2",
      children: [
        {
          name: "Vue 性能优化",
          key: "1-2-1",
        },
        {
          name: "Vue 高阶组件",
          key: "1-2-2",
        },
        {
          name: "Vue 状态管理",
          key: "1-2-3",
        },
      ],
    },
  ],
}
