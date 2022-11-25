<template>
  <el-menu
    class="sidebar-container-menu"
    mode="vertical"
    :default-active="activeMenu"
    :background-color="scssVariables.menuBg"
    :text-color="scssVariables.menuText"
    :active-text-color="scssVariables.menuActiveText"
    :collapse="sidebar.open"
    :collapse-transition="true"
  >
    <sidebar-item
      v-for="route in menuRoutes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    ></sidebar-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useRoute } from "vue-router"
import scssVariables from "@/styles/variables.module.scss"
import SidebarItem from "./SidebarItem.vue"
import { routes } from "../../router/index"
import { storeToRefs } from "pinia"
import { useAppStore } from "../../stores/app"
const store = useAppStore()
const { sidebar } = storeToRefs(store)

const route = useRoute()
console.log(route.matched, "1234567")
const activeMenu = computed(() => {
  const { path, meta } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
const menuRoutes = computed(() => routes)
</script>
