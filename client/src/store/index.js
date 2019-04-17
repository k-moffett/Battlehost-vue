import Vue from 'vue'
import Vuex from 'vuex'
import userSession from './modules/userSession'
import createUnitForm from './modules/createUnitForm'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        userSession: userSession,
        createUnitForm: createUnitForm
    },

})

store.state.userSession
store.state.createUnitForm

export default store