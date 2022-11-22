<template>
  <div>
    <h1>dashboard</h1>
    <svg-icon icon-class="bug"></svg-icon>
    <input type="text" v-model="userInput" />
    <el-button type="primary" @click="sayhi">按钮</el-button>
  </div>
</template>
<script setup lang="ts">
import { getCurrentInstance, ref } from "vue"
const { proxy } = getCurrentInstance()
const userInput = ref("1")
const sayhi = () => {
  proxy?.$message.success("恭喜你，这是一条成功消息")
}
</script>
