<template>
  <el-menu
    :default-active="currentIndex"
    active-text-color="#ff9954"
    class="tabbar"
    router
    @select="itemClick"
    >
    <template 
      v-for="(item,index) in tabbarData" 
      :key="index+''">
      <el-menu-item 
        class="tabbar-item"
        :route="item.path"
        :index="index+''">
        <template #title>
          <img v-if="!(currentIndex === index+'')" :src="getImageUrl(item.image)" alt="">
          <img v-else :src="getImageUrl(item.activeImage)" alt="">
          <div class="text">{{item.text}}</div>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
  
    <!--imgUrl 
      wepback:require
      vite: URL
    -->
   <!-- <div class="tabbar">
    <template v-for="(item,index) in tabbarData" :key="index+''">
      <div 
        @click="itemClick(index,item.path)" 
        :class="{active:index === currentIndex}" 
        class="tabbar-item">
        <img v-if="!(index === currentIndex)" :src="getImageUrl(item.image)" alt="">
        <img v-else :src="getImageUrl(item.activeImage)" alt="">
        <div class="text">{{item.text}}</div>
      </div>
    </template>
  </div> -->
  <!-- <div class="tabbar">
    <div class="tabbar-item">
      <img src="@/assets/img/tabbar/tab_home.png" alt="">
      <div class="text">首页</div>
    </div>
    <div class="tabbar-item">
      <img src="@/assets/img/tabbar/tab_favor.png" alt="">
      <div class="text">收藏</div>
    </div>
    <div class="tabbar-item">
      <img src="@/assets/img/tabbar/tab_order.png" alt="">
      <div class="text">订单</div>
    </div>
    <div class="tabbar-item">
      <img src="@/assets/img/tabbar/tab_message.png" alt="">
      <div class="text">消息</div>
    </div>
  </div> -->
</template>

<script setup>
  import tabbarData from "@/utils/data/tabbar"
  import { getImageUrl } from "@/utils/getImageUrl"
  import { ref } from "vue"

  const currentIndex = ref("0")

  const itemClick = (index)=>{
    // 改变当前高亮
    currentIndex.value = index
  }
  
</script>

<style scoped>
.tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #f3f3f3;
}
.tabbar-item{
  flex: 1;
  display: flex;
  line-height: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tabbar-item img{
  width: 32px;
  margin-bottom: 2px;
}
.tabbar-item .text{
  font-size: 12px;
}
</style>