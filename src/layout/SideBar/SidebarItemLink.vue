<template>
  <component :is="type" v-bind="linkProps">
    <slot />
  </component>
</template>
<script setup lang="ts">
import { computed } from "vue"
import { isExternal } from "../../utils/validate"
const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
// 判断接收的路径 是不是外链
const isExt = computed(() => isExternal(props.to))
const type = computed(() => {
  if (isExt.value) {
    return "a"
  }
  return "router-link"
})
const linkProps = computed(() => {
  if (isExt.value) {
    return {
      href: props.to,
      target: "_blank",
      rel: "noopener"
    }
  }
  return {
    to: props.to
  }
})
</script>
