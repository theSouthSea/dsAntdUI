import ImgTextCheckboxDemo from "@/pages/base/checkbox/ImgTextCheckbox"

import styles from "./index.module.less"

const Child2 = () => {
  return (
    <div className={styles.scrollBox}>
      1.15 添加 虚拟测试文本（一段拉丁文，lorem，lipsum） lorem lipsum 一篇拉丁文的
      文章；又叫做，哑元文本；乱数假文 dummy text ['dʌmi] adj. 虚拟的 n.哑巴 用途：测试外观。许多
      web 开发人员 使用 “Lorem ipsum” 虚拟文本 来测试他们的 HTML 模板在实际数据中的外观。 缩写语法
      lorem，lirem5,5代表5个单词 lipsum 标签名&gt;lorem5,搭配 &gt;后代运算符，为标签 添加 5个单词
      虚拟的测试文本。 ① 相同文字吗? 每次使用缩写语 生成的文字都不同，不是同一段虚拟文字 ②
      默认多少英文单词？ 默认的 lorem 每次都是30个单词 ③ 如何指定单词个数？ 后面写上数字 lorem10
      will generate a 10-words dummy text. lorem10 将生成10个单词的虚拟文本。 ④
      可以在重复的元素中，同时生成 虚拟测试文本吗？ 可以，使用后代 运算符 &gt; p*4&gt;lorem10 ⑤
      如何和隐式标签名一起使用？ 写在 被省略的标签名的位置 ul&gt;lorem5.item*3 和
      ul&gt;.item*3&gt;lorem5 一个意思
      <h2>相同id的Checkbox出现在标签页组件的不同标签下会出现问题</h2>
      <ImgTextCheckboxDemo></ImgTextCheckboxDemo>
    </div>
  )
}
export default Child2
