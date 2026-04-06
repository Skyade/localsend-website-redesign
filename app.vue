<template>
  <NuxtLayout>
    <NuxtPage />
    <AppFooter />
    <!-- <div class="absolute flex gap-2" style="top: 20px; right: 20px">
      <ColorMode />
      <LanguageSwitcher />
    </div> -->
  </NuxtLayout>
</template>

<script setup lang="ts">
import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
import ColorMode from "~/components/ColorMode.vue";
useHead({
  script: [
    {
      innerHTML: `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { document.documentElement.classList.add('dark') } else { document.documentElement.classList.remove('dark') }`
    }
  ]
})
</script>

<style>
/* Page transitions and global styles are handled in assets/css/style.css */
</style>
