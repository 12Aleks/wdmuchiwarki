import Vue from 'vue'
import Vuex from 'vuex'
import other from './storeFiles/otherProducts'
import products from './storeFiles/products'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        other,
        products,
    }
})
