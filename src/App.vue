<template>
  <div class="app">
    <!-- v-if="$route.fullPath !== '/city'" -->
    <!-- v-if="!$route.meta.unshowTabbar"  -->
    <tabbar />
    <router-view />
  </div>
</template>

<script setup>
  import tabbar from "@/components/tabbar/tabbar.vue"
</script>

<style scoped>

</style>
