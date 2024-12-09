import Mock from "mockjs"

import apps from "./apps"
import auth from "./auth"
import file from "./file"
import fileUploadStatus from "./fileUploadStatus"
import news from "./news"
import searchResults from "./searchResults"
import user from "./user"

const mocks = [...file, ...user, ...auth, ...news, ...apps, ...searchResults, ...fileUploadStatus]

// mock请求方法放在这里统一处理,1是简便写法,2是如果请求路径需要加统一前缀或域名,可以在这里处理
for (const i of mocks) {
  Mock.mock(i.url, i.type, i.response)
}
