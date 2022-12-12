import { getCityAll } from "@/service";
import { defineStore } from "pinia";


const useCity = defineStore("city",{
  state:()=>({
    cities:[],
    city:{
      cityName:"南昌"
    }
  }),
  actions:{
    getCityAllAction(){
      getCityAll().then(res=>{
        this.cities = res.data
      })
    }
  }
})

export default useCity