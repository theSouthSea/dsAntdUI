import { memo, useMemo } from "react";
import styles from "./styles.module.less";

export type ModuleType = {
  sectionTitle: string;
  img: string;
  templateType: ModuleTypeKey;
  background?: string;
  description?: string;
  descriptionList?: any[];
  imgData?: any[];
  productTemplateImage?: any[];
  title?: string;
  [key: string]: any;
};
const moduleListMobile: ModuleType[] = [
  {
    sectionTitle: "富文本",
    img: new URL("@/assets/img/Image_text/rich_text.png", import.meta.url).href,
    templateType: "model1",
    description: "",
  },
  {
    sectionTitle: "图文一体",
    img: new URL("@/assets/img/Image_text/yiti.png", import.meta.url).href,
    templateType: "model2",
    descriptionList: [],
    imgData: [],
    altLabe: "",
  },
  {
    sectionTitle: "多图轮播",
    img: new URL("@/assets/img/Image_text/slideshow.png", import.meta.url).href,
    templateType: "model7",
    background: "#ffffff",
    carouselList: [],
    title: "",
    titleColor: "#000",
    titleFontSize: 36,
    titleFont: "SourceHanSanScn-Bold",
  },
  {
    sectionTitle: "视频样式一（全屏）",
    img: new URL("@/assets/img/Image_text/video.png", import.meta.url).href,
    templateType: "model8",
    background: "#ffffff",
    // imgData: [],
    // autoplayVideo: [],
    // clickVideo: [],
    imgUrl: "",
    autoplayVideo: "",
    clickVideo: "",
    playText: "",
    descriptionList: [],
  },
];
const moduleList: ModuleType[] = [
  {
    sectionTitle: "富文本",
    img: new URL("@/assets/img/Image_text/rich_text.png", import.meta.url).href,
    templateType: "model1",
    description: "",
    dynamicEffectFlag: true,
  },
  {
    sectionTitle: "图文一体",
    img: new URL("@/assets/img/Image_text/yiti.png", import.meta.url).href,
    templateType: "model2",
    descriptionList: [],
    imgData: [],
    altLabe: "",
    dynamicEffectFlag: true,
  },
  {
    sectionTitle: "双图-上图下文",
    img: new URL("@/assets/img/Image_text/shangtu.png", import.meta.url).href,
    templateType: "model3",
    background: "#ffffff",
    productTemplateImage: [
      {
        altLabel: "",
        imgName: "",
        imgUrl: "",
        productText: [
          {
            description: "",
          },
        ],
      },
      {
        altLabel: "",
        imgName: "",
        imgUrl: "",
        productText: [
          {
            description: "",
          },
        ],
      },
    ],

    title: "",
    titleColor: "#000",
    titleFontSize: 36,
    titleFont: "SourceHanSanScn-Bold",
  },
  {
    sectionTitle: "三图-上图下文",
    img: new URL("@/assets/img/Image_text/santu.png", import.meta.url).href,
    templateType: "model4",
    background: "#ffffff",
    productTemplateImage: [
      {
        altLabel: "",
        imgName: "",
        imgUrl: "",
        productText: [
          {
            description: "",
          },
        ],
      },
      {
        altLabel: "",
        imgName: "",
        imgUrl: "",
        productText: [
          {
            description: "",
          },
        ],
      },
      {
        altLabel: "",
        imgName: "",
        imgUrl: "",
        productText: [
          {
            description: "",
          },
        ],
      },
    ],

    title: "",
    titleColor: "#000",
    titleFontSize: 36,
    titleFont: "SourceHanSanScn-Bold",
  },
  {
    sectionTitle: "左图右文",
    img: new URL("@/assets/img/Image_text/zuotu.png", import.meta.url).href,
    templateType: "model5",
    background: "#ffffff",
    imgUrl: "",
    altLabel: "",
    description: "",
  },
  {
    sectionTitle: "右图左文",
    img: new URL("@/assets/img/Image_text/zuowen.png", import.meta.url).href,
    templateType: "model6",
    background: "#ffffff",
    imgUrl: "",
    altLabel: "",
    description: "",
  },
  {
    sectionTitle: "多图轮播",
    img: new URL("@/assets/img/Image_text/slideshow.png", import.meta.url).href,
    templateType: "model7",
    background: "#ffffff",
    carouselList: [],
    title: "",
    titleColor: "#000",
    titleFontSize: 36,
    titleFont: "SourceHanSanScn-Bold",
    dynamicEffectFlag: true,
  },
  {
    sectionTitle: "视频样式一（全屏）",
    img: new URL("@/assets/img/Image_text/video.png", import.meta.url).href,
    templateType: "model8",
    background: "#ffffff",
    imgUrl: "",
    autoplayVideo: "",
    clickVideo: "",
    playText: "",
    descriptionList: [],
  },
];
const otherModuleList = [
  {
    sectionTitle: "上图下文板块填充式",
    img: new URL("@/assets/img/Image_text/tianchong.png", import.meta.url).href,
    templateType: "model9",
    background: "#ffffff",
    carouselList: [],
    productTemplateImage: [],
  },
  {
    sectionTitle: "上图下文板块平铺式",
    img: new URL("@/assets/img/Image_text/pingpu.png", import.meta.url).href,
    templateType: "model10",
    background: "#ffffff",
    carouselList: [],
    productTemplateImage: [],
  },
];
// 分类模板
const classificationModuleList = [
  {
    sectionTitle: "纯文本",
    img: new URL("@/assets/img/Image_text/rich_text.png", import.meta.url).href,
    templateType: "PLAIN_TEXT",
    h5TextContent: "",
    pcTextContent: "",
  },
  {
    sectionTitle: "分类名称",
    img: new URL("@/assets/img/Image_text/rich_text.png", import.meta.url).href,
    templateType: "CATEGORY_NAME",
    pcTextContent: "",
  },
  {
    sectionTitle: "商品轮播",
    img: new URL("@/assets/img/Image_text/slideshow.png", import.meta.url).href,
    templateType: "PRODUCT_CAROUSEL",
    background: "#ffffff",
    productSkuList: [],
  },
  {
    sectionTitle: "左图右文",
    img: new URL("@/assets/img/Image_text/zuotu.png", import.meta.url).href,
    templateType: "LEFT_PICTURE_RIGHT_TEXT",
    background: "#ffffff",
    h5ImgUrl: "",
    pcImgUrl: "",
    linkUrl: "",
    literalText1: "",
    literalText2: "",
    subscriptFlag: false,
    subscriptText: "",
  },
  {
    sectionTitle: "右图左文",
    img: new URL("@/assets/img/Image_text/zuowen.png", import.meta.url).href,
    templateType: "LEFT_TEXT_RIGHT_PICTURE",
    background: "#ffffff",
    h5ImgUrl: "",
    pcImgUrl: "",
    linkUrl: "",
    literalText1: "",
    literalText2: "",
    subscriptFlag: false,
    subscriptText: "",
  },
  {
    sectionTitle: "双列商品",
    img: new URL("@/assets/img/Image_text/shangtu.png", import.meta.url).href,
    templateType: "TWO_PRODUCT",
    background: "#ffffff",
    productSkuList: [],
  },
];

export type ModuleListProps = {
  onSelected: (item: ModuleType) => void;
  isProductPage: boolean;
  type: DeviceType | "classification";
};

function ModuleList({ onSelected, isProductPage, type }: ModuleListProps) {
  const handleClick = (item: ModuleType) => {
    onSelected(item);
  };
  const moduleListData = useMemo(() => {
    let arr: Record<string, any>[] = moduleList;
    if (type === "mobile") {
      arr = moduleListMobile;
    }
    if (!isProductPage && type !== "classification") {
      arr = [...arr, ...otherModuleList];
    } else if (type === "classification") {
      arr = classificationModuleList;
    }
    return arr;
  }, [isProductPage, type]);

  return (
    <ul className={styles.optionFlex}>
      {moduleListData.map((item: any) => (
        <li onClick={() => handleClick(item)} key={item.sectionTitle} role="presentation">
          <div className={styles.image}>
            <img src={item.img} alt={item.sectionTitle} className={styles.imageInner} />
          </div>
          <div className={styles.itemTitle}>{item.sectionTitle}</div>
        </li>
      ))}
    </ul>
  );
}

export default memo(ModuleList);
