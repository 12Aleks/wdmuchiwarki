import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/styles.scss'
import Scroll from  './directives/scroll'
import i18n from './i18n'
import Carusel from './components/subcomponents/Carusel'
import Caracteristic from './components/subcomponents/Characteristic'
import CaracteristicDesc from './components/subcomponents/CaracteristicDescription'
import OtherProducts from './components/subcomponents/OtherProducts'
import Contact from './components/subcomponents/Contact'
import Vuelidate from 'vuelidate'

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.use(Vuelidate)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.directive('scroll', Scroll)
Vue.config.productionTip = false;
Vue.component('carusel', Carusel)
Vue.component('caracteristic', Caracteristic)
Vue.component('carac-desc', CaracteristicDesc)
Vue.component('other-products', OtherProducts)
Vue.component('contact', Contact)




new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
