import { useState, useEffect } from "react";

import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, message } from "@ui";
import type { RcFile } from "antd/es/upload";

import { isArray } from "lodash-es";
import { getFullCdnUrl } from "@/utils/common";
import { PROGRESS_CONFIG } from "@/utils/constants";
import styled from "./style.module.less";

/**
 * @params width 限制图片上传宽度
 * @params height 限制图片上传高度
 * @params maxSize 限制图片上传大小，单位KB
 * @params limit 限制最大图片上传数量
 * @params accept 上传图片的格式
 * @params value 默认回显的图片，单图传字符串，多图传数组
 * @params onChange 父组件获取图片的方法
 */
// todo width，height 功能还未完善
interface Props {
  maxSize?: number;
  limit?: number;
  accept?: string;
  isVideo?: boolean;
  value?: string | string[];
  onChange?: (obj: any) => void;
}

const defaultAccept = "image/png, image/jpeg, image/jpg, image/gif";

const action = `${window.SITE_CONFIG.apiPath}/file/api/upload`;
const ImgUpload = ({
  maxSize,
  limit,
  accept,
  value,
  onChange,
  isVideo = false,
}: Props) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<any[]>([]);

  const defaultFileList: any = [];
  if (isArray(value) && value.length) {
    value.forEach((item: any) => {
      defaultFileList.push({
        url: getFullCdnUrl("img", item),
        pathUrl: item,
      });
    });
  } else if (value) {
    defaultFileList.push({
      url: getFullCdnUrl("img", value),
      pathUrl: value,
    });
  }

  useEffect(() => {
    setFileList(defaultFileList);
  }, [value]);

  // 图片上传前
  const beforeUpload = async (file: RcFile) => {
    const imgAccept = accept?.trim()
      ? accept.replace(/\s*/g, "").split(",")
      : defaultAccept.replace(/\s*/g, "").split(",");
    const isCorrectFormat = imgAccept.includes(file.type);
    if (!isCorrectFormat) {
      const acceptTips = imgAccept.join(",").replace(/image\/*/g, "");
      Message.error(`只能上传${acceptTips}格式的图片/视频！`);
    }
    const isLt2M = maxSize
      ? file.size / 1024 < maxSize
      : file.size / 1024 < 2 * 1024;
    if (!isLt2M) {
      Message.error(
        `${isVideo ? "视频" : "图片"}大小不能超过${maxSize ?? 2048}KB`
      );
    }
    return (isCorrectFormat && isLt2M) || Upload.LIST_IGNORE;
  };

  // 查看大图取消
  const handleCancel = () => {
    setPreviewOpen(false);
  };

  // 查看大图打开
  const handlePreview = async (file: any) => {
    setPreviewImage(file.url);
    setPreviewOpen(true);
  };
  const handleChange = (info: any) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.map((file) => {
      if (file?.response?.code === "200") {
        file.url = isVideo
          ? getFullCdnUrl("video", file.response.data)
          : getFullCdnUrl("img", file.response.data);
        file.pathUrl = file.response.data;
      } else if (file?.response?.code && file?.response?.code !== "200") {
        file = "";
        Message.error(file?.response?.msg || "上传失败");
      }
      return file;
    });
    if (info.file.status === "uploading") {
      setFileList(newFileList);
    } else {
      if ((!limit || limit === 1) && onChange) {
        // 单图
        onChange(newFileList?.[0]?.pathUrl ?? "");
      } else if (onChange) {
        // 多图
        onChange(newFileList.map((item) => item.pathUrl));
      }
      setFileList(newFileList);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>上传{isVideo ? "视频" : "图片"}</div>
    </div>
  );

  return (
    <>
      <Upload
        action={action}
        accept={accept || defaultAccept}
        listType="picture-card"
        fileList={fileList}
        beforeUpload={beforeUpload}
        onPreview={handlePreview}
        onChange={handleChange}
        progress={PROGRESS_CONFIG}
      >
        {fileList.length >= (limit || 1) ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} footer={null} onCancel={handleCancel}>
        <div className={styled.mediaWrapper}>
          {isVideo ? (
            <video
              style={{ width: "100%" }}
              src={previewImage}
              controls
              autoPlay
            >
              <track kind="captions" />
            </video>
          ) : (
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default ImgUpload;
