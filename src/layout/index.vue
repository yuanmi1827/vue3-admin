<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <side-bar></side-bar>
    </div>
    <div class="main-container">
      <div class="header">
        <navbar></navbar>
        <tags-view></tags-view>
      </div>
      <!-- <div class="app-main">
        <h2>app main</h2>
        <router-view></router-view>
      </div> -->
      <app-main></app-main>
    </div>
  </div>
</template>
<script setup lang="ts">
import SideBar from "./SideBar/index.vue"
import AppMain from "./components/AppMain.vue"
</script>
<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      background: cyan;
      .navbar {
        height: 50px;
        background: #1890ff;
      }
      .tags-view {
        height: 34px;
        background: #12efff;
      }
    }
    .app-main {
      min-height: calc(100vh - 84px);
      background: red;
    }
  }
}
</style>
