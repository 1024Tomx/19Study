import VueRequest from "@/service/request"
 
export function getCityAll(){
  return VueRequest.get({url:"/city/all"})
}