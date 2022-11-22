<template>
  <div class="sidebar-item-container" v-if="!item.meta || !item.meta.hidden">
    <!-- 只有一个子路由 -->
    <template v-if="!alwaysShowRootMenu && theOnlyOneChildRoute">
      <!-- 如果没有meta属性意味着不必渲染了 -->
      <sidebar-item-link
        :to="resolvePath(theOnlyOneChildRoute.path)"
        v-if="theOnlyOneChildRoute.meta"
      >
        <el-menu-item
          :index="resolvePath(theOnlyOneChildRoute.path)"
          v-if="theOnlyOneChildRoute.meta"
        >
          <el-icon v-if="icon">
            <svg-icon class="menu-icon" :icon-class="icon"></svg-icon>
          </el-icon>
          <template #title>
            <span>{{ theOnlyOneChildRoute.meta?.title }}</span>
          </template>
        </el-menu-item>
      </sidebar-item-link>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template #title>
        <el-icon v-if="item.meta?.icon">
          <svg-icon class="menu-icon" :icon-class="item.meta.icon"> </svg-icon>
        </el-icon>
        <span class="submenu-title">{{ item.meta?.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      >
      </sidebar-item>
    </el-sub-menu>
  </div>
</template>
<script setup lang="ts">
import { computed, toRefs } from "vue"
import type { PropType } from "vue"
import type { RouteRecordRaw } from "vue-router"
import { ElMenuItem, ElIcon } from "element-plus"
import path from "path-browserify"
import SidebarItemLink from "./SidebarItemLink.vue"
import { isExternal } from "../../utils/validate"

const props = defineProps({
  item: {
    type: Object as PropType<RouteRecordRaw>,
    required: true
  },
  basePath: {
    type: String,
    required: true
  }
})
const showingChildNumber = computed(() => {
  const children = (props.item.children || []).filter((child) => {
    if (child.meta && child.meta.hidden) {
      return false
    }
    return true
  })
  return children.length
})
// 要渲染的单个路由 如果该路由只有一个子路由 默认直接渲染这个子路由
const { item } = toRefs(props)
const theOnlyOneChildRoute = computed(() => {
  if (showingChildNumber.value > 1) {
    return null
  }
  if (item.value.children) {
    for (const child of item.value.children) {
      if (!child.meta || !child.meta.hidden) {
        return child
      }
    }
  }
  return {
    ...props.item,
    path: ""
  }
})
const icon = computed(() => {
  return (
    theOnlyOneChildRoute.value?.meta?.icon ||
    (props.item.meta && props.item.meta.icon)
  )
})
const resolvePath = (childPath: string) => {
  if (isExternal(childPath)) {
    return childPath
  }
  return path.resolve(props.basePath, childPath)
}
const alwaysShowRootMenu = computed(
  () => props.item.meta && props.item.meta.alwaysShow
)
</script>

<style lang="scss" scoped>
.sidebar-item-container {
  width: 200px;
}
</style>
