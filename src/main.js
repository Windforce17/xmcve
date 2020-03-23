import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false

const home = { template: '<div><p>home</p></div>' }
const about = { template: '<div>bar</div>' }

const routes = [
  { path: '/home', component: home },
  { path: '/about', component: about }
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
