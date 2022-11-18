import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import { createPinia } from "pinia"
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"
import "normalize.css/normalize.css"
import "@/styles/index.scss"
import "virtual:svg-icons-register"
import initSvgIcon from "./icons/index"
import installElementPlus from "./plugins/element"
// import "./styles/variables.module.scss.d.ts"
createApp(App)
  .use(createPinia())
  .use(installElementPlus)
  .use(router)
  .use(initSvgIcon)
  .mount("#app")
