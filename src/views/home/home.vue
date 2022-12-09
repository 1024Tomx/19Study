<template>
  <div class="home">
    <home-nav-top />
    <div class="bannner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeSearchBox />
  </div>
</template>

<script setup>
  import homeNavTop from './components/home-nav-top.vue';
  import homeSearchBox from "./components/home-search-box.vue"
</script>

<style scoped>
.bannner img{
  width: 100%;
}


/* 修改样式的方法
   1.重写变量的值  强制生效 !important:提高权重
    当前文件中的元素以及子元素生效
   2.找到类,对CSS属性进行重写(不能直接修改)
    scoped 只针对当前作用域，所以直接修改没有效果
    去掉scoped（但是会影响全局）
    :deep()穿透过去，找到这个子组件的样式
    >>>
    /deep/
*/

/* :deep(.title){
  color: red;
} */
/* /deep/ .title{
  color: red;
}
.home >>> .title{
  color: green;
} */
</style>