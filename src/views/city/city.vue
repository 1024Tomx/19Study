<template>
  <div class="city top-page">
    <div class="search">
      <el-input
        v-model="searchCity"
        class="w-50 m-2 searchInp"
        size="small"
        placeholder="城市/区域/位置">
        <template #prefix>
          <el-icon class="iconInp">
            <Search />
          </el-icon>
        </template>
      </el-input>
      <!-- <div class="cancel">取消</div> -->
      <el-button class="cancel" @click="goback" type="info" text>取消</el-button>
    </div>
    
  </div>
</template>

<script setup>
  import { Search } from "@element-plus/icons-vue"
  import { ref } from 'vue';
  import { useRouter } from "vue-router";

  const router = useRouter()
  // 搜索框的内容
  const searchCity = ref("")

  // 监听取消按钮
  const goback = ()=>{
    router.back()
  }
</script>

<style scoped>
.city{
  /* position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
  overflow-y: auto; */
}
/* 搜索框 */
.search{
  display: flex;
  align-items: center;
  padding: 10px 0 5px 5px;
}
.cancel{
  width: 44px;
}
/* .iconInp{
  color: var(--color-all);
} */
:deep(.el-icon){
  --color:var(--color-all);
}
.searchInp{
  --el-border-radius-base:15px;
  --el-fill-color-blank:#f9f9f9;
  --el-color-primary:var(--color-all);
}
</style>