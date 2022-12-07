import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// css文件的引入
import "normalize.css"
import "./assets/css/index.css"
// 引入elementPlus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(ElementPlus)
app.mount('#app')
// asdhsal