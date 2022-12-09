<template>
  <div class="searchBox">
    <div class="location">
      <div @click="goCity" class="city">南昌</div>
      <div @click="getCurrentPosition" class="position">
        <div class="text">我的位置</div>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';


  const router = useRouter()
  // 选择城市
  const goCity = ()=>{
    router.push("/city")
  }

  // 获取当前定位
  const getCurrentPosition=()=>{
    navigator.geolocation.getCurrentPosition((res)=>{
      console.log(res,"请求成功");
    },(err)=>{
      console.log(err,"请求失败");
    },{
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }
</script>

<style scoped>
/* 定位 */
.location{
  display: flex;
  height: 44px;
  align-items: center;
  padding: 0 20px;
}
.city{
  flex: 1;
  color: #333;
  font-size: 15px;
}
.position{
  display: flex;
  align-items: center;
}
.position img{
  width: 14px;
  margin-top: 2px;
  margin-left: 5px;
}
.position .text{
  font-size: 12px;
  color: #666;
}
</style>