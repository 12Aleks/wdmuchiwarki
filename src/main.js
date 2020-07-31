import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
    LayoutPlugin,
    TablePlugin,
    CarouselPlugin,
    ImagePlugin,
    ButtonPlugin,
    NavbarPlugin,
    NavPlugin
} from 'bootstrap-vue'
import i18n from './i18n'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/styles.scss'
import Carusel from './components/subcomponents/Carusel'
import Scroll from './directives/scroll'
const Caracteristic = () => import('./components/subcomponents/Characteristic')
const NewsletterButton = () => import('./components/subcomponents/NewsletterButton')
const CaracteristicDesc = () => import('./components/subcomponents/CaracteristicDescription')
const OtherProducts = () => import('./components/subcomponents/OtherProducts')
const Contact = () => import('./components/subcomponents/Contact')

Vue.use(VueI18n)
Vue.use(LayoutPlugin)
Vue.use(TablePlugin)
Vue.use(CarouselPlugin)
Vue.use(ImagePlugin)
Vue.use(ButtonPlugin)
Vue.use(NavbarPlugin)
Vue.use(NavPlugin)
Vue.use(Vuelidate)
Vue.directive('scroll', Scroll)
Vue.config.productionTip = false;
Vue.component('carusel', Carusel)
Vue.component('caracteristic', Caracteristic)
Vue.component('newsletter-button', NewsletterButton)
Vue.component('carac-desc', CaracteristicDesc)
Vue.component('other-products', OtherProducts)
Vue.component('contact', Contact)


new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')

