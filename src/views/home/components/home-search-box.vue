<template>
  <div class="searchBox">
    <!-- 定位 -->
    <div class="location line-bottom">
      <div @click="goCity" class="city">{{city.cityName}}</div>
      <div @click="getCurrentPosition" class="position">
        <div class="text">我的位置</div>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
    <!-- 日期选择 -->
    <div @click="showDate = true" class="section line-bottom">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{startDateStr}}</span>
        </div>
        <div class="stay">共{{stayCount}}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{endDateStr}}</span>
        </div>
      </div>
    </div>
    <van-calendar 
      @confirm="onConfirm"
      :show-confirm="false"
      v-model:show="showDate"
      color="#ff9954"
      :round="false"
      type="range" />
    <div class="section price-count line-bottom">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="section keyword line-bottom">关键字/位置/民宿名</div>
  </div>
</template>

<script setup>
  import useCity from '@/stores/modules/city';
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { formateDate,diffDate } from '@/utils/formatDate';
  const router = useRouter()
  const useCityStore = useCity()
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
  // 获取选择的城市
  const {city} = storeToRefs(useCityStore)
  // 当前的日期
  // const nextDate = new Date(nowDate.getTime() + 60 * 60 * 24 * 1000)
  // 当前日期
  const nowDate = new Date()
  // 当前日期+1
  const nextDate = new Date()
  nextDate.setDate(nextDate.getDate()+1)
  // 开始日期
  const startDateStr = ref(formateDate(nowDate))
  // 结束日期
  const endDateStr = ref(formateDate(nextDate))
  // 入住天数
  const stayCount = ref(diffDate(nowDate,nextDate))
  // 控制日期选择的隐藏和显示
  const showDate = ref(false)
  // 选择日期
  const onConfirm = (value)=>{
    // 获取选择的日期
    const selStartDate = value[0]
    const selEndDate = value[1]
    // 展示选择的日期
    startDateStr.value = formateDate(selStartDate)
    endDateStr.value = formateDate(selEndDate)
    // 计算入住天数
    stayCount.value = diffDate(selStartDate,selEndDate)
    // 关闭选择日期组件
    showDate.value = false
  }
</script>

<style lang="scss" scoped>
.searchBox{
  --van-calendar-popup-height: 100%;
}
/* 定位 */
.location{
  display: flex;
  height: 44px;
  align-items: center;
  padding: 0 20px;
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
}
// 入住的日期
.section{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  color: #999;
  .start{
    flex: 1;
    display: flex;
    align-items: center;
    height: 44px;
    border-right: 1px solid var(--line-color);
  }
  .end{
    min-width: 30%;
    padding-left: 20px;
  }
  .date{
    display: flex;
    flex-direction: column;
    .tip{
      font-size: 12px;
    }
    .time{
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
  .stay{
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}
</style>