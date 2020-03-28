import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Platform from './components/Platform.vue'
import Timeline from './components/Timeline.vue'
import Partner from './components/Partner.vue'


Vue.use(VueRouter)
Vue.use(Antd)
Vue.config.productionTip = false


const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/platform', component: Platform },
  { path: '/timeline', component: Timeline },
  { path: '/contact', component: Contact },
  { path: '/partner', component: Partner },

]

const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  // el: '#app',
  router: router,
  // template: App
  render: h => h(App),
  // })
}).$mount('#app')
