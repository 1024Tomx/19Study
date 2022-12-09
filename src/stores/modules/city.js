import { getCityAll } from "@/service";
import { defineStore } from "pinia";


const useCity = defineStore("city",{
  state:()=>({
    cities:[]
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