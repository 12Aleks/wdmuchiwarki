export default {
    state: {
        multiSlider: [
            {
                title: 'slider.first.titleSlider',
                slFirst: 'slider.first.descriptionFirst',
                slSecond: 'slider.first.descriptionSecond',
            },
            {
                title: 'slider.second.titleSlider',
                slFirst: 'slider.second.descriptionFirst',
                slSecond: 'slider.second.descriptionSecond',
            }
        ],
        productsTitle: 'Produkty',
        products: [
            {
                name: 'MultiTank',
                title: 'products.feeder',
                photo: '3M7A2089n.png',
                backgroundOne: 'product_a.svg',
                altOne: 'circle one',
                backgroundTwo: 'product_b.svg',
                altTwo: 'circle two',
                styles: '',
                active: false,
            },
            {
                name: 'MicroTyphoon',
                title: 'products.microTyphoon',
                photo: 'IMG_0033.png',
                backgroundOne: 'product_a.svg',
                altOne: 'circle one',
                backgroundTwo: 'product_b.svg',
                altTwo: 'circle two',
                styles: '',
                active: false
            },
            {
                name: 'Typhoon32',
                title: 'products.typhoon32',
                photo: 'typhoon_32_40.png',
                backgroundOne: 'product_a.svg',
                altOne: 'circle one',
                backgroundTwo: 'product_b.svg',
                altTwo: 'circle two',
                styles: '',
                active: false
            },
            {
                name: 'Typhoon50',
                title: 'products.typhoon50',
                photo: 'typhon_50_63.png',
                backgroundOne: 'product_a.svg',
                altOne: 'circle one',
                backgroundTwo: 'product_b.svg',
                altTwo: 'circle two',
                styles: 'offset-md-0 offset-lg-2',
                active: false
            },
            {
                name: 'Y2',
                title: 'products.connector',
                photo: '3M7A2122n.png',
                backgroundOne: 'product_a.svg',
                altOne: 'circle one',
                backgroundTwo: 'product_b.svg',
                altTwo: 'circle two',
                styles: 'offset-sm-0 offset-md-3 offset-lg-0',
                active: false
            },
        ],
        workers: [
            {
                name: 'Filip Madzio',
                position: 'contact.workers.position',
                image: 'madfi.png',
                phone: '+ 48 669 097 469',
                email: 'filip.madzio@termagroup.pl'
            }
        ],

    },
    getters: {
        multiSlider(state) {
            return state.multiSlider
        },
        productsTitle(state) {
            return state.productsTitle
        },
        products(state) {
            return state.products
        },
        workers(state){
            return state.workers
        }
    },
    mutations: {
        down(state, payload){
            state.products[payload].active = true
        },
        up(state, payload){
            state.products[payload].active = false
        },
    },
    actions: {
        down({commit}, payload){
            commit('down', payload)
        },
        up({commit}, payload){
            commit('up', payload)
        }
    }

}
