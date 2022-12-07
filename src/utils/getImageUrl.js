export const getImageUrl = (image)=>{
  // 1.相对路径
  // 2.基础路径
  // http://localhost:8891/src
  // @/assets/img/tabbar/tab_home.png
  // http://localhost:8891/src/assets/img/tabbar/tab_home.png
  return new URL(`../assets/img/${image}`,import.meta.url).href
}