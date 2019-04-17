const createUnitForm = {
    state: {
        form: {
            unitName: '',
            ability1: {
                name: '',
                description: '',
            }
        }
    },

    mutations: {
        setUnitName(state, unitName) {
            state.form.unitName = unitName
        },
        setUnitAbilityName(state, data) {
            console.log('Data in setUnitAbilities mustation: \n',data)
            state.form = {
                [data.abilityId]: {
                    name: data.name
                }
                
            }
        }
    },

    actions: {
        async setUnitName(context, unitName) {
            return await context.commit('setUnitName', unitName)
         },
        async setUnitAbilityName(context, data) {
            return await context.commit('setUnitAbilityName', data)
         }
    },

    getters: {
        getForm: state => {
            return state.form
        },
        getUnitName: state => {
            return state.form.unitName
        },
        getAbilityName: state => (abilityId) => {
            console.log('getAbilitName getter',abilityId)
            console.log(state.form.ability1)
            // return state.form.id.name
        }
    }
}

export default createUnitForm