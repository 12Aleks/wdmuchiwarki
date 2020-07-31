export default {
    state: {
        products: [
            {
                name: 'MultiTank',
                title: 'products.feeder',
                photo: '3M7A2089n.png',
                backgroundOne: 'product_a.png',
                altOne: 'circle one',
                backgroundTwo: 'product_b.png',
                altTwo: 'circle two',
                styles: '',
                active: false,
            },
            {
                name: 'MicroTyphoon',
                title: 'products.microTyphoon',
                photo: 'IMG_0033.png',
                backgroundOne: 'product_a.png',
                altOne: 'circle one',
                backgroundTwo: 'product_b.png',
                altTwo: 'circle two',
                styles: '',
                active: false
            },
            {
                name: 'Typhoon32',
                title: 'products.typhoon32',
                photo: 'typhoon_32_40.png',
                backgroundOne: 'product_a.png',
                altOne: 'circle one',
                backgroundTwo: 'product_b.png',
                altTwo: 'circle two',
                styles: '',
                active: false
            },
            {
                name: 'Typhoon50',
                title: 'products.typhoon50',
                photo: 'typhon_50_63.png',
                backgroundOne: 'product_a.png',
                altOne: 'circle one',
                backgroundTwo: 'product_b.png',
                altTwo: 'circle two',
                styles: 'offset-md-0 offset-lg-2',
                active: false
            },
            {
                name: 'Y2',
                title: 'products.connector',
                photo: '3M7A2122n.png',
                backgroundOne: 'product_a.png',
                altOne: 'circle one',
                backgroundTwo: 'product_b.png',
                altTwo: 'circle two',
                styles: 'offset-sm-0 offset-md-3 offset-lg-0',
                active: false
            },
        ]
    },
    getters: {
        products(state) {
            return state.products
        }
    },
    mutations: {
        down(state, payload) {
            state.products[payload].active = true
        },
        up(state, payload) {
            state.products[payload].active = false
        },
        newPosition(state, payload) {
            state.presentation[payload].offset = true
        },
        oldPosition(state, payload) {
            state.presentation[payload].offset = false
        }
    },
    actions: {
        down({commit}, payload) {
            commit('down', payload)
        },
        up({commit}, payload) {
            commit('up', payload)
        },
        newPosition({commit}, payload) {
            commit('newPosition', payload)
        },
        oldPosition({commit}, payload) {
            commit('oldPosition', payload)
        }
    }
}
