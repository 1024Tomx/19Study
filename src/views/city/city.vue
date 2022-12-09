<template>
  <div class="city top-page">
    <div class="top">
      <!-- 搜索框 -->
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
      <!-- tabs -->
      <el-tabs
        v-model="activeName"
        class="demo-tabs"
        stretch
      >
        <template v-for="item,key,index in cityAll" :key="index+''">
          <el-tab-pane :label="item.title" :name="key"></el-tab-pane>
        </template>
      </el-tabs>
    </div>
    <!-- 内容 -->
    <div class="content">
      <template v-for="value,key,indexA in cityAll" :key="indexA+''">
        <cityContent 
          v-show="key === activeName" 
          :group-data="value"/>
      </template>
    </div>
  </div>
</template>

<script setup>
  import cityContent from "./components/city-content.vue";
  import { Search } from "@element-plus/icons-vue"
  import { ref } from 'vue';
  import { useRouter } from "vue-router";
  import useCity from "@/stores/modules/city"
  import { storeToRefs } from "pinia";

  const router = useRouter()
  const useCityStore = useCity()
  useCityStore.getCityAllAction()
  // 搜索框的内容
  const searchCity = ref("")

  // 监听取消按钮
  const goback = ()=>{
    router.back()
  }

  // tab切换
  const activeName = ref("cityGroup")

  // 获取所有城市信息 toRefs
  const { cities:cityAll }= storeToRefs(useCityStore)

</script>

<style scoped>
.city{
  /* position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
  overflow-y: auto; */
}
/* .top{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.content{
  margin-top: 121px;
} */
.content{
  height: calc(100vh - 121px);
  overflow-y: auto;
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
/* tab切换 */
.demo-tabs{
  margin-top: 10px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
:deep(.el-tabs__nav-wrap::after){
  width: 0;
}
:deep(.el-tabs__item.is-active){
  --el-color-primary:black;
}
:deep(.el-tabs__item){
  --el-tabs-header-height:50px;
}
:deep(.el-tabs__active-bar){
  width: 50px !important;
  left: 55px;
}
</style>