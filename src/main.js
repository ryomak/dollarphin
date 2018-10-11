// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axiosPlugin from './assets/axios'
import EventBus from '@/assets/eventBus'
Vue.use(EventBus)

Vue.config.productionTip = false
Vue.use(axiosPlugin);



/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})

