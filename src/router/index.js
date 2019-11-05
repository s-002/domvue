import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/list'
  },
  {
    path:'/list',//列表
    component: ()=>import('../views/List/list.vue'),
    redirect:'/list/home',
    children:[
      {
        path:'/list/home',//首页
        component:()=>import('../views/List/homelist.vue'),
        redirect:'/list/home/nav1',
        children:[
          {
            path:'/list/home/nav1',//关注
            name:'nav1',
            component:()=>import('../views/List/guanz.vue')
          },
          {
            path:'/list/home/nav2',//推荐
            name:'nav2',
            component:null
          },{
            path:'/list/home/nav3',//热榜
            name:'nav3',
            component:null
          }
        ]
      },
      {
        path: '/list/about',//想法
        component: () => import('../views/About.vue')
      },
      {
        path:'/list/my',//我的
        component:null
      },{
        path:'/list/scolch',//大学
        component:null
      },{
        path:'/list/masg',//消息
        component:null
      }
    ]
  },
  {
    path:'/detail/:id',//详情
    name:'detail',
    component:()=>import('../views/Detail/detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
