import { Editor, IAllProps } from "@tinymce/tinymce-react";
import { useGlobalConfig } from "@business/context/GlobalConfigContext";
// 媒体资源上传接口
// const uploadPath = `${window.SITE_CONFIG.apiPath}/file/api/upload`
// interface IProps extends IAllProps {
//   uploadPath: string;
//   apiKey: string;
// }
function TinyBaseConf(props: IAllProps) {
  const { apiKey, uploadPath } = useGlobalConfig();
  // 图片上传
  const imageUploadHandler = (blobInfo: any, progress: any) =>
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open("POST", uploadPath);
      xhr.upload.onprogress = (e) => {
        progress((e.loaded / e.total) * 100);
      };
      xhr.onload = () => {
        if (xhr.status === 403) {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ message: `HTTP Error: ${xhr.status}`, remove: true });
          return;
        }
        if (xhr.status < 200 || xhr.status >= 300) {
          reject(Error(`HTTP Error: ${xhr.status}`));
          return;
        }
        let json = JSON.parse(xhr.responseText);
        if (json?.code === "200" && json.data) {
          json = {
            location: `${uploadPath}${json.data}`,
          };
        }
        if (!json || typeof json.location !== "string") {
          reject(Error(`Invalid JSON: ${xhr.responseText}`));
          return;
        }
        resolve(json.location);
      };

      xhr.onerror = () => {
        reject(
          Error(
            `Image upload failed due to a XHR Transport error. Code: ${xhr.status}`
          )
        );
      };

      const formData = new FormData();
      formData.append("file", blobInfo.blob(), blobInfo.filename());

      xhr.send(formData);
    });
  return (
    <Editor
      apiKey={apiKey}
      {...props}
      init={{
        height: 500,
        menubar: true,
        language: "zh_CN",
        plugins: [
          "anchor",
          "autolink",
          "charmap",
          "codesample",
          "emoticons",
          "image",
          "link",
          "lists",
          "media",
          "searchreplace",
          "table",
          "visualblocks",
          "wordcount",
          "checklist",
          "mediaembed",
          "casechange",
          "export",
          "formatpainter",
          "pageembed",
          "linkchecker",
          "a11ychecker",
          // 在快速切换页面时,会导致Node cannot be null or undefined错误
          // 'tinymcespellchecker',
          "permanentpen",
          "powerpaste",
          "advtable",
          "advcode",
          "editimage",
          // 'tinycomments',
          "tableofcontents",
          "footnotes",
          "autocorrect",
          "typography",
          "inlinecss",
        ],
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | " +
          "link image media table | addcomment showcomments | spellcheckdialog a11ycheck typography | " +
          "align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        images_upload_handler: imageUploadHandler as any,
        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        content_style:
          "body { font-family:Inter UI,Helvetica,Arial,sans-serif; font-size:14px }",
        font_size_input_default_unit: "px",
        font_size_formats:
          "10px 11px 12px 14px 16px 18px 20px 24px 28px 32px 36px 40px 48px 58px 70px",
        font_family_formats:
          "Inter UI=Inter UI,Inter UI;宋体=宋体,SimSun; 微软雅黑=微软雅黑,Microsoft YaHei; 楷体=楷体,楷体_GB2312, SimKai; 黑体=黑体, SimHei; 隶书=隶书, SimLi; andaleMono=andale mono; arial=arial, helvetica,sans-serif; arialBlack=arial black,avant garde; comicSansMs=comic sans ms; impact=impact,chicago; timesNewRoman=times new roman",
      }}
    />
  );
}
export default TinyBaseConf;
