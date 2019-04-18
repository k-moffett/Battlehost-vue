const createUnitAbilities = {
    state: {
        form: {

        }
    },

    mutations: {
        setUnitAbilityName(state, data) {
            if (state.form[data.abilityId] === undefined) {
                state.form[data.abilityId] = {}
            }
            state.form[data.abilityId].name = data.name
             
        },
        setUnitAbilityDescription(state, data) {
            if (state.form[data.abilityId] === undefined) {
                state.form[data.abilityId] = {}
            }
            state.form[data.abilityId].description = data.description
            
        },
        removeAbility(state, data) {
            delete state.form[data]
        }
    },

    actions: {
        async setUnitAbilityName(context, data) {
            return await context.commit('setUnitAbilityName', data)
         },
         async setUnitAbilityDescription(context, data) {
            return await context.commit('setUnitAbilityDescription', data)
         },
         async removeAbility(context, data) {
            return await context.commit('removeAbility', data)
         },
    },

    getters: {
        getAbilityName(state) {
            return (ability) => { 
                return state.form[ability.name]
            }
        },
        getAbilityDescription(state) {
            return (ability) => {
                return state.form[ability.description]
            }
        },

        getUnitAbilities: state => {
            return state.form
        }
    }
}

export default createUnitAbilities