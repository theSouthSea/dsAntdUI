import "@wangeditor/editor/dist/css/style.css" // 引入 css

import { i18nChangeLanguage, i18nGetResources, t } from "@wangeditor/editor"
import { Editor, Toolbar } from "@wangeditor/editor-for-react"
import { useEffect, useState } from "react"

import styles from "./index.module.less"

// 切换语言 - 'en' 或者 'zh-CN'
i18nChangeLanguage("en")

const resources = i18nGetResources("en") // 'en' 或 'zh-CN'
const resourcesCN = i18nGetResources("zh-CN") // 'en' 或 'zh-CN'
console.log("resources=", resources)
console.log("resourcesCN=", resourcesCN)

console.log(t("header.title"))
function MyEditor(props) {
  // editor 实例
  const [editor, setEditor] = useState(null)

  // 编辑器内容
  const { html, setHtml } = props
  // const [html, setHtml] = useState("<p>hello</p>")

  // 模拟 ajax 请求，异步设置 html
  // useEffect(() => {
  //   setTimeout(() => {
  //     setHtml("<p>hello world</p>")
  //   }, 1500)
  // }, [])

  // 工具栏配置
  const toolbarConfig = {}
  // 工具栏配置
  // const toolbarConfig = {
  //   toolbarKeys: [
  //     "headerSelect", //正文
  //     "blockquote", //引号
  //     "|", //分隔线
  //     "bold", //加粗
  //     "underline", //下划线
  //   ],
  // }

  // 编辑器配置
  const editorConfig = {
    placeholder: "请输入内容...",
    MENU_CONF: {},
  }
  editorConfig.MENU_CONF["uploadImage"] = {
    server: "/api/upload",
    fieldName: "file",
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    // form-data fieldName ，默认值 'wangeditor-uploaded-image'
    // fieldName: 'your-custom-name',

    // 单个文件的最大体积限制，默认为 2M
    maxFileSize: 1 * 1024 * 1024, // 1M

    // 最多可上传几个文件，默认为 100
    maxNumberOfFiles: 10,

    // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
    allowedFileTypes: ["image/*"],

    // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
    meta: {
      token: "xxx",
      otherKey: "yyy",
    },

    // 将 meta 拼接到 url 参数中，默认 false
    metaWithUrl: false,

    // 自定义增加 http  header
    // headers: {
    //     Accept: 'text/x-json',
    //     otherKey: 'xxx'
    // },

    // 跨域是否传递 cookie ，默认为 false
    withCredentials: true,

    // 超时时间，默认为 10 秒
    timeout: 5 * 1000, // 5 秒
    // 上传之前触发
    onBeforeUpload(file: File) {
      // TS 语法
      // onBeforeUpload(file) {    // JS 语法
      // file 选中的文件，格式如 { key: file }
      return file

      // 可以 return
      // 1. return file 或者 new 一个 file ，接下来将上传
      // 2. return false ，不上传这个 file
    },

    // 上传进度的回调函数
    onProgress(progress: number) {
      // TS 语法
      // onProgress(progress) {       // JS 语法
      // progress 是 0-100 的数字
      console.log("progress", progress)
    },

    // 单个文件上传成功之后
    onSuccess(file: File, res: any) {
      // TS 语法
      // onSuccess(file, res) {          // JS 语法
      console.log(`${file.name} 上传成功`, res)
    },

    // 单个文件上传失败
    onFailed(file: File, res: any) {
      // TS 语法
      // onFailed(file, res) {           // JS 语法
      console.log(`${file.name} 上传失败`, res)
    },

    // 上传错误，或者触发 timeout 超时
    onError(file: File, err: any, res: any) {
      // TS 语法
      // onError(file, err, res) {               // JS 语法
      console.log(`${file.name} 上传出错`, err, res)
    },

    // 所有文件上传完成
    onComplete(files: File[], res: any) {
      // TS 语法
      // onComplete(files, res) {                // JS 语法
      console.log("所有文件上传完成", files, res)
    },
    // 自定义插入图片
    customInsert(res, insertFn) {
      // TS 语法
      // customInsert(res, insertFn) {                  // JS 语法
      // res 即服务端的返回结果
      const { url } = res
      // 从 res 中找到 url alt href ，然后插入图片
      insertFn(url)
    },
    // async customUpload(file,insertFn){
    //   const {name,type,size} = file;
    //   console.log(file)
    //   const formData = new FormData()
    //   formData.append("file", file)
    //   const res = await fetch("/api/upload", {
    //     method: "POST",
    //     body: formData,
    //     headers: {
    //       Authorization: "Bearer " + sessionStorage.getItem("token"),
    //       responseType: "arraybuffer",
    //     },
    //   });
    //   // const fileUrl = URL.createObjectURL(new Blob([res],{type: type}))
    //   const base64Url = await res.arrayBuffer()
    //   console.log('customUpload-res',res)
    //   console.log('customUpload-base64Url',base64Url)
    //   const fileUrl = `data:${type};base64,${btoa(
    //     String.fromCharCode(...new Uint8Array(base64Url))
    //   )}`;
    //   insertFn(fileUrl,name,fileUrl)
    // }
  }

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor?.destroy()
      setEditor(null)
    }
  }, [editor])

  return (
    <>
      <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: "1px solid #ccc" }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          className={styles.editorContainer}
        />
      </div>
      <div style={{ marginTop: "15px" }}>{html}</div>
    </>
  )
}

export default MyEditor
