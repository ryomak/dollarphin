import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/top/top'
import About from '@/components/about/index'
import Detail from '@/components/detail/index'
import Contact from '@/components/contact/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
    	path: '/contact',
    	name: 'contact',
    	component: Contact
    },
    {
    	path:'/about',
    	name: 'about',
    	component: About,
    },
    {
    	path: '/detail',
    	name: 'detail',
    	component:Detail,
    }
  ]
})
