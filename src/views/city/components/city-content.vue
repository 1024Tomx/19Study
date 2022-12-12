<template>
  <div class="content">
    <van-index-bar
      :index-list="indexList"
      :sticky="false" 
      highlight-color="#ff9954">
      <van-index-anchor index="热门">热门</van-index-anchor>
      <div class="hotCity">
        <template v-for="hotCity in groupData.hotCities">
          <div @click="cityClick(hotCity)" class="city">{{hotCity.cityName}}</div>
        </template>
      </div>
      <template v-for="group,indexB in groupData.cities" :key="indexB+''">
        <van-index-anchor :index="group.group">{{group.group}}</van-index-anchor>
        <template v-for="city,indexC in group.cities" :key="indexC+''">
          <van-cell @click="cityClick(city)" :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
    <!-- <template v-for="group,indexB in groupData.cities" :key="indexB+''">
      <div>
        <h3>{{group.group}}</h3>
        <template v-for="city,indexC in group.cities" :key="indexC+''">
          <div>
            {{city.cityName}}
          </div>
        </template>
      </div>
    </template> -->
  </div>
</template>

<script setup>
  import useCity from '@/stores/modules/city';
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';

  const props = defineProps({
    groupData:{
      default:{}
    }
  })

  // 获取路由
  const router = useRouter()
  // 获取城市store
  const useCityStore  = useCity()

  // 自定义的索引列表
  const indexList = computed(()=>['#',...props.groupData.cities.map(n=>n.group)])

  // 监听城市的点击
  const cityClick = (city)=>{
    // 1.返回上一层
    // router.go(-1)
    router.back()
    // 2.改成所选城市
    useCityStore.city = city
  }
</script>

<style scoped>
.hotCity{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 25px;
}
.hotCity .city{
  width: 70px;
  height: 28px;
  border-radius: 14px;
  font-size: 12px;
  color: #000;
  text-align: center;
  line-height: 28px;
  background: #fff4ec;
  
  margin: 5px 0;
}
</style>