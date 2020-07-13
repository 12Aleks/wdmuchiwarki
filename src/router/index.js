import Vue from 'vue'
import Router from 'vue-router'
import pl from '@/components/Home'
import en from '@/components/Home_en'
import de from '@/components/Home_de'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: pl
        },{
            path: '/en',
            name: 'Home_en',
            component: en
        },{
            path: '/de',
            name: 'Home_de',
            component: de
        }

    ]
})
