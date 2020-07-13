import Vue from 'vue'
import Vuex from 'vuex'
import header from './storeFiles/header'
import home from './storeFiles/home'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        header,
        home,
    }
})
