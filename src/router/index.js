import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../i18n'

function load(component) {
    return () => import(`@/components/${component}.vue`)
}

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
            component: load('Home'),
        },
        {
            path: 'multi',
            name: 'MultiTank',
            component: load('MultiTank')
        },
        {
            path: 'micro_typhoon',
            name: 'MicroTyphoon',
            component: load('MicroTyphoon')
        },
        {
            path: 'typhoon_32',
            name: 'Typhoon32',
            component: load('Typhoon32')
        },
        {
            path: 'typhoon_50',
            name: 'Typhoon50',
            component: load('Typhoon50')
        },
        {
            path: 'y_2',
            name: 'Y2',
            component: load('Y2')
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
