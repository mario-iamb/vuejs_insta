import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import HelloWorld from './components/HelloWorld.vue'
import MyList from './components/MyList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/default',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'MyList',
      component: MyList
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('./views/About.vue')
    // }
  ]
})
