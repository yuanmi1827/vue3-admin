<template>
  <!-- 如果iconClass是带协议的图标链接 则通过style属性方式渲染-->
  <div
    class="svg-icon svg-external-icon"
    v-if="isExt"
    :style="styleExternalIcon"
    v-bind="$attrs"
  ></div>
  <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script setup lang="ts">
import { isExternal } from "../../utils/validate"
import { computed } from "vue"
const props = defineProps<{ iconClass: string; className?: string }>()
const isExt = computed(() => isExternal(props.iconClass || ""))
const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() =>
  props.className ? `svg-icon ${props.className}` : "svg-icon"
)
const styleExternalIcon = computed(() => ({
  mask: `url(${props.iconClass}) no-repeat 50% 50%`,
  "-webkit-mask": `url(${props.iconClass}) no-repeat 50% 50%`
}))
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
