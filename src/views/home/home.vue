<template>
  <div class="home">
    <h2>home</h2>
    <button>按钮</button>
    <el-button size="small" type="primary" loading>按钮</el-button>
    <el-button size="large" type="success">按钮</el-button>
    <el-button type="danger">按钮</el-button>
    <el-button type="primary" circle>a</el-button>
    <el-button type="primary" circle :icon="Edit" />
  </div>
</template>

<script setup>
import { Edit } from '@element-plus/icons-vue'
</script>

<style scoped>

</style>