import { Menu } from "antd"
import { useEffect, useState } from "react"
import { RouteObject, useLocation, useNavigate } from "react-router-dom"

// import { fetchGetMenu } from "@/service/api"
import { routerArray } from "@/router/newRoutes"
import { MenuItem } from "@/types/auth"

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
      function travel(routes: RouteObject[], prefix = "") {
        const res: any[] = []
        routes.forEach((item) => {
          if (item.path) {
            const realPath = item.path.startsWith("/")
              ? item.path
              : prefix.replace("*", "") + item.path
            res.push({
              path: realPath,
              key: realPath,
              label: item.name || item.meta?.title || item.path.replace("/*", ""),
              children: item.children?.length > 0 ? travel(item.children, realPath) : [],
            })
          }
        })
        return res
      }
      const result = travel(routerArray)
      console.log("result", result)

      setMenus(result)
      setOpenKeys([findInitKey(result, currentRoute.pathname)])
    }
    fetchData()
  }, [currentRoute.pathname])

  const menuClick = (e: { key: string }) => {
    navigateTo(e.key)
  }
  const handleOpenChange = (keys: string[]) => {
    console.log("keys", keys)
    setOpenKeys([keys[keys.length - 1]])
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

function findInitKey(menus: MenuItem[], path: string): string {
  const item: MenuItem = menus?.find((item) => path.includes(item!.key as string)) as MenuItem
  return item?.key as string
}

export default LeftMenu
