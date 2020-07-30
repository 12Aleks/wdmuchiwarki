import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../i18n'
// import Home from '@/components/Home'
// import MultiTank from '@/components/MultiTank'
// import MicroTyphoon from '@/components/MicroTyphoon'
// import Typhoon32 from '@/components/Typhoon32'
// import Typhoon50 from '@/components/Typhoon50'
// import Y2 from '@/components/Y2'
//
const Home = () => import('@/components/Home')
const MultiTank = () => import('@/components/MultiTank')
const MicroTyphoon = () => import( '@/components/MicroTyphoon')
const Typhoon32 = () => import('@/components/Typhoon32')
const Typhoon50 = () => import('@/components/Typhoon50')
const Y2 = () => import('@/components/Y2')


Vue.use(VueRouter)

const routes = [{
    path: '/:locale',
    component: {
        render: h => h('router-view')
    },
    beforeEnter: (to, from, next) => {
        const locale = to.params.locale;
        const supported_locales = process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',');
        if (!supported_locales.includes(locale)) return next('pl');
        if (i18n.locale !== locale) {
            i18n.locale = locale;
        }
        return next()
    },
    children: [
        {
            path: '',
            name: 'Home',
            component: Home,
        },
        {
            path: 'multi',
            name: 'MultiTank',
            component: MultiTank
        },
        {
            path: 'micro_typhoon',
            name: 'MicroTyphoon',
            component: MicroTyphoon
        },
        {
            path: 'typhoon_32',
            name: 'Typhoon32',
            component: Typhoon32
        },
        {
            path: 'typhoon_50',
            name: 'Typhoon50',
            component: Typhoon50
        },
        {
            path: 'y_2',
            name: 'Y2',
            component: Y2
        }
    ],
},
    {
        path: '*',
        redirect() {
            return process.env.VUE_APP_I18N_LOCALE;
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return { selector: to.hash }
        }
        return { x: 0, y: 0 }
    }
})

export default router
