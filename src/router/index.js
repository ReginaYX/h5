import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/pages/register'], resolve),
      meta: {
          title: '非幕新用户注册'
      },
    },
    {
        path: '/agreement',
        name: 'agreement',
        component: resolve => require(['@/pages/agreement'], resolve),
        meta: {
            title: '使用条款'
        },
    },
    {
      path: '/finish',
      name: 'finish',
      component: resolve => require(['@/pages/finish'], resolve),
      meta: {
          title: '注册成功'
      },
    }
  ]
})
