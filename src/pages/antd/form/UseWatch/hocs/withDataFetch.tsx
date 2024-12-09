import { ComponentType, createElement, ReactElement, useEffect, useState } from "react"

import { getApps } from "@/services/apps"
import { getNews } from "@/services/news"

const REQUESTFN_MAP = {
  NewsCard: getNews,
  AppsCard: getApps,
}

export const withDataFetch = (Comp: ComponentType) => {
  return (props: any): ReactElement => {
    const { apiPath } = props
    console.log("apiPath=", apiPath)
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
      // if (data) {
      //   return;
      // }
      // fetch(apiPath).then((res) => res.json()).then((data) => {
      //   props.setData(data);
      // });
      REQUESTFN_MAP[apiPath]()
        .then((res) => {
          console.log("res=", res)
          setData(res.data)
        })
        .catch((err) => {
          console.log("err=", err)
        })
    }, [apiPath])
    // if (!data) {
    //   return null;
    // }
    return <Comp data={data}></Comp>
    // return createElement(Comp, { data });
  }
}
