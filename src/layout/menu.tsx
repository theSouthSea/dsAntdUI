import type { MenuProps } from "antd"
import { Menu } from "antd"
import { useEffect, useState } from "react"
import { RouteObject, useLocation, useNavigate } from "react-router-dom"

// import { fetchGetMenu } from "@/service/api"
import { routerArray } from "@/router/newRoutes"
import { MenuItem } from "@/types/auth"

interface LevelKeysProps {
  key?: string
  children?: LevelKeysProps[]
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {}
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level
      }
      if (item.children) {
        func(item.children, level + 1)
      }
    })
  }
  func(items1)
  return key
}

let levelKeys = {} as Record<string, number>

const LeftMenu = () => {
  const navigateTo = useNavigate()
  const currentRoute = useLocation()
  const [menus, setMenus] = useState<MenuItem[]>([])
  const [openKeys, setOpenKeys] = useState([""])

  useEffect(() => {
    const fetchData = async () => {
      // 从服务器获取菜单数据
      // const { data } = await fetchGetMenu()
      // if (data) {
      //   setMenus(data)
      //   setOpenKeys([findInitKey(data, currentRoute.pathname)])
      // }
      // 从路由获取菜单数据
      function travel(routes: RouteObject[], prefix = "/") {
        const res: any[] = []
        routes.forEach((item) => {
          if (item.path) {
            const realPath = item.path.startsWith("/")
              ? item.path
              : prefix.replace("*", "") + item.path
            const menuItem = {
              path: realPath,
              key: realPath,
              label: item.name || item.meta?.title || item.path.replace("/*", ""),
            }
            if (item.children?.length > 0) {
              menuItem.children = travel(item.children, realPath)
            }
            res.push(menuItem)
          }
        })
        return res
      }
      const result = travel(routerArray)
      console.log("result", result)
      levelKeys = getLevelKeys(result as LevelKeysProps[])
      setMenus(result)
      console.log("currentRoute.pathname", currentRoute.pathname)
      const selectedItem = findInitKey(result, currentRoute.pathname)
      console.log("selectedItem", selectedItem)
      setOpenKeys(selectedItem)
    }
    fetchData()
  }, [currentRoute.pathname])

  const menuClick = (e: { key: string }) => {
    const path = e.key.startsWith("/") ? e.key : `/${e.key}`
    navigateTo(path)
  }
  // const handleOpenChange = (keys: string[]) => {
  //   console.log("keys", keys)
  //   setOpenKeys([keys[keys.length - 1]])
  //   // setOpenKeys(keys)
  // }
  const handleOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const currentOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    console.log("keys", keys, openKeys, currentOpenKey)
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = keys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey])
      const newOpenKeys = keys
        // remove repeat key
        .filter((_, index) => index !== repeatIndex)
        // remove current level all child
        .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      console.log("newOpenKeys", newOpenKeys)

      setOpenKeys(newOpenKeys)
    } else {
      // close
      console.log("keys", keys)
      setOpenKeys(keys)
    }
  }
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      // 菜单项的数据
      items={menus}
      onClick={menuClick}
      // 某项菜单展开和回收的事件
      onOpenChange={handleOpenChange}
      // 当前菜单展开项的key数组
      openKeys={openKeys}
    />
  )
}

// function findInitKey(menus: MenuItem[], path: string): string[] {
//   const item: MenuItem = menus?.find((item) => path.includes(item!.key as string)) as MenuItem
//   return item?.key as string
// }
function findInitKey(menus: MenuItem[], path: string): string[] {
  function travel(arr, parentKey: string[] = []): string[] | undefined {
    // const item: MenuItem = arr?.find((item) => {
    //   const curKey = []
    //   const isInclude = path.includes(item!.key as string)
    //   if(isInclude){
    //     parentKey.push(item.key as string)
    //   }else if(item.children?.length){
    //     travel(item.children, curKey.push(item.key))
    //   }
    // }) as MenuItem
    // return item?.key;
    for (const item of arr) {
      if (item.path === path) {
        return parentKey
      }
      if (item.children?.length) {
        const childkey = travel(item.children, [item.key])
        if (childkey?.length) {
          return parentKey.concat(childkey)
        }
      }
    }
  }
  const result = travel(menus)
  return result ? result : []
}

export default LeftMenu
