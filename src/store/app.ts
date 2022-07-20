import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        sidebar: {
            opened: true
        }
    }),
    actions: {
        TOGGLE_SIDEBAR (opened: boolean) {
            this.sidebar.opened = opened
        }
    }
})
