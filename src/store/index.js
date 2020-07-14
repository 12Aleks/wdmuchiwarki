import Vue from 'vue'
import Vuex from 'vuex'
import header from './storeFiles/header'
import home from './storeFiles/home'
import products from './storeFiles/products'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        header,
        home,
        products,
    }
})
