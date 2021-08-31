/*
 * @Author: Damom
 * @Date: 2021-03-23 21:49:57
 * @LastEditors: Damom
 * @LastEditTime: 2021-03-23 22:10:00
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
