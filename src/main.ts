import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"
import "normalize.css/normalize.css"
import "@/styles/index.scss"
import "virtual:svg-icons-register"
import initSvgIcon from "./icons/index"
import installElementPlus from "./plugins/element"
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App)
  .use(pinia)
  .use(installElementPlus)
  .use(router)
  .use(initSvgIcon)
  .mount("#app")
