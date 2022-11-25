import { defineStore } from "pinia"
import { Size } from "../plugins/element"
export const useAppStore = defineStore(
  "app",
  () => {
    const state = reactive({
      sidebar: {
        open: true
      },
      size: "default"
    })
    const sidebar = computed(() => state.sidebar)
    const size = computed(() => state.size)

    const toggleSidebar = () => {
      state.sidebar.open = !state.sidebar.open
    }
    const setSize = (size: Size) => {
      state.size = size
    }
    return { state, sidebar, toggleSidebar, size, setSize }
  },
  {
    persist: {
      storage: window.sessionStorage,
      paths: ["state.sidebar.open", "state.size"]
    }
  }
)
