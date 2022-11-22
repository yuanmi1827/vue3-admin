import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Layout from "../layout/index.vue"

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue"
          ),
        meta: {
          title: "Dashboard",
          icon: "dashboard"
        }
      }
    ]
  }
]
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: "/documentation",
    component: Layout, // 布局组件作为一级路由
    redirect: "/documentation/index",
    children: [
      {
        path: "index",
        name: "Documentation",
        component: () =>
          import(
            /* webpackChunkName: "documentation" */ "@/views/documentation/index.vue"
          ),
        meta: {
          title: "Documentation",
          icon: "documentation"
        }
      }
    ]
  },
  {
    path: "/guide",
    component: Layout,
    redirect: "/guide/index",
    children: [
      {
        path: "index",
        name: "Guide",
        component: () =>
          import(/* webpackChunkName: "guide" */ "@/views/guide/index.vue"),
        meta: {
          title: "Guide",
          icon: "guide",
          activeMenu: "/documentation/index"
        }
      }
    ]
  },
  {
    path: "/system",
    component: Layout,
    redirect: "/system/user",
    meta: {
      title: "System",
      icon: "lock",
      alwaysShow: true
    },
    children: [
      {
        path: "menu",
        component: () =>
          import(/* webpackChunkName: "menu" */ "@/views/system/menu.vue"),
        meta: {
          title: "Menu Management",
          icon: "list"
        }
      }
      // {
      //   path: "role",
      //   component: () =>
      //     import(/* webpackChunkName: "role" */ "@/views/system/role.vue"),
      //   meta: {
      //     title: "Role Management",
      //     icon: "list"
      //   }
      // },
      // {
      //   path: "user",
      //   component: () =>
      //     import(/* webpackChunkName: "user" */ "@/views/system/user.vue"),
      //   meta: {
      //     title: "User Management",
      //     icon: "list"
      //   }
      // }
    ]
  },
  {
    // 外链路由
    path: "/external-link",
    component: Layout,
    children: [
      {
        path: "http://www.zhufengpeixun.com/",
        redirect: "/",
        meta: {
          title: "External Link",
          icon: "link"
        }
      }
    ]
  }
]
export const routes = [...constantRoutes, ...asyncRoutes]
export default createRouter({
  history: createWebHistory(),
  routes
})
