import { defineStore } from "pinia"
export const useAppStore = defineStore(
  "app",
  () => {
    const state = reactive({
      sidebar: {
        open: true
      }
    })
    const sidebar = computed(() => state.sidebar)
    const toggleSidebar = () => {
      state.sidebar.open = !state.sidebar.open
    }
    return { state, sidebar, toggleSidebar }
  },
  {
    persist: {
      storage: window.sessionStorage,
      paths: ["state.sidebar.open"]
    }
  }
)
