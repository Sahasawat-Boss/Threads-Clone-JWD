<template>
    <div class="h-screen">
        <!-- Top Nav -->
        <nav class="w-full max-w-[500px] mx-auto">
            <div class="w-full flex items-center justify-center px-2 h-10 my-2">
                <img class="w-[35px]" src="/threads-logo.png">
            </div>
        </nav>

        <!-- Pages -->
        <div class="p-8 max-w-2xl mx-auto border border-white/35">
            <NuxtPage />
        </div>

        <!-- Bottom Nav -->
        <!-- Icon from:https://icones.js.org/ -->
        <nav id="BottomNav" class="fixed z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-black">
            <div class="flex w-full max-w-[500px] mx-auto items-center justify-around">
                <button @click="navigateTo('/')" class="w-full h-full">
                    <Icon name="material-symbols:home-outline" size="35" color="#ffffff" />
                </button>
                <button @click="userStore.isMenuOverlay = true" class="w-full h-full">
                    <Icon class="mb-1" name="material-symbols:edit-square-outline-rounded" size="32" color="#ffffff" />
                </button>
                <button @click="userStore.isLogoutOverlay = true" class="w-full h-full">
                    <Icon class="mb-1" name="ph:sign-out" size="32" color="#ffffff" />
                </button>
            </div>
        </nav>

    </div>
</template>

<script setup>
// import { useUserStore } from '~/stores/user';
// const userStore = useUserStore()


</script>
