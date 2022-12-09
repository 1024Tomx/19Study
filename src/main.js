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

import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(ElementPlus)
app.use(Vant)
app.mount('#app')
// asdhsal

/**
 * git init
 * git add .
 * git commit -m "备份"
 * git remote -v  查看关联
 * git remote add origin "ssh路径"
 * git push ssh路径
 * 
 * 关联push的某个仓库(后面push的时候就不用加上路径了)
 * git push --set-upstream 自己的仓库地址 master
 * 
 */

/**
 * 配置自己的username和邮箱
 * git config --global user.name "自己的用户名"
 * git config --global user.email "自己的邮箱"
 * 
 * 生成ssh
 * ssh-keygen -t rsa -C "自己的邮箱"
 * 查看ssh
 * cat ~/.ssh/id_rsa.pub
 * 
 * github生成一个密钥
 * settings=>SSH and GPG =>new SSH=>加上生成的ssh=>add KEY
 * 
 */