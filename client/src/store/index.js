import Vue from 'vue'
import Vuex from 'vuex'
import userSession from './modules/userSession'
import createUnitAbilities from './modules/createUnitAbilities'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        userSession: userSession,
        createUnitAbilities: createUnitAbilities
    },

})

store.state.userSession
store.state.createUnitAbilities

export default store