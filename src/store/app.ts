import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        sidebar: {
            opened: true
        }
    }),
    actions: {
        TOGGLE_SIDEBAR () {
            this.sidebar.opened = !this.sidebar.opened
        }
    }
})
