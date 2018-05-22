import Vue from 'vue'
import Router from 'vue-router'
import pac from '@/components/pac'
import register from '@/components/register'
import uploadwork from '@/components/uploadwork'
import mywork from '@/components/mywork'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: pac
      // component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/uploadwork',
      name: 'uploadwork',
      component: uploadwork
    },
    {
      path: '/mywork',
      name: 'mywork',
      component: mywork
    }
  ]
})
