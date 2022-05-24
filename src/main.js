import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import api from './config/index'
import axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
console.log(api)
axios.defaults.baseURL = api;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
