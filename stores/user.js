// stores/counter.js
import { defineStore } from 'pinia'

// Set name and state
export const useUserStore = defineStore('user', {
    state: () => ({
        posts: [],
        isMenuOverlay: false,
        isLogoutOverlay: false,
    }),

    // actions: {
    //     async getAllPosts() {
    //         let res = await useFetch('/api/get-all-posts')
    //         this.posts = res.data
    //         return res.data
    //     }
    // },
})