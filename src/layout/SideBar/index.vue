<template>
  <div>sidebar</div>
  <h4 @click="isCollapse = !isCollapse">测试</h4>
  <el-menu
    class="sidebar-container-menu"
    mode="vertical"
    :default-active="activeMenu"
    :background-color="scssVariables.menuBg"
    :text-color="scssVariables.menuText"
    :active-text-color="scssVariables.menuActiveText"
    :collapse="isCollapse"
    :collapse-transition="true"
  >
    <sidebar-item></sidebar-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useRoute } from "vue-router"
import scssVariables from "@/styles/variables.module.scss"
import SidebarItem from "./SidebarItem.vue"
const route = useRoute()
const isCollapse = ref(false)
const activeMenu = computed(() => {
  return route.path
})
</script>
