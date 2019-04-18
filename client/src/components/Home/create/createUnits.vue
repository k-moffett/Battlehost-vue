<template>
    <div id="create-unit-wrapper">

        <form id='new-unit-form'>

            <div id='form-title'>
                <div>
                    <div>Unit Name</div>
                    <input  
                        type='text'
                        autocomplete="off"
                        v-model='unitName'
                    />
                    
                    <button
                        id='add-ability-btn'
                        @click="addNewAbility"
                        >+ Add ability
                    </button>
                </div>
            </div> <!-- form-title -->
                
            <div id='form-body'>
                <newAbility
                    v-for="ability in abilities"
                    :key="ability.id"
                    :id="ability.id"
                    @removeAbilityClick="removeAbility" 
                />
                <div id="notes">
                    <div>Notes:</div>
                    <textarea
                        autocomplete="off"
                        id='notes-input'
                        v-model="notes"
                    />

                    <button 
                        id='add-ability-btn'
                        type="button"
                        @click="submitUnit"
                        >Submit
                    </button>
                </div>

            </div> <!-- form-body -->
            
        </form>
    </div>
</template>

<script>
import '../../../scss/createUnits.scss'
import newAbility from './newAbility.vue'

export default {
    name: 'createUnits',
    data: () => ({
        id: 0,
        unitName: '',
        abilities: [],
        notes: ''
    }),
    computed: {
        username() {
          return this.$store.getters.getUsername
        }
    },

    methods: {
        addNewAbility() {
            event.preventDefault()
            if (this.abilities.length < 5) {
                this.id++
                this.abilities.push({
                    id: this.id
                })
            }
        },

        removeAbility(id) {
            this.abilities.splice(this.abilities.findIndex(function(ability){
                return ability.id === id
            }), 1)
            this.$store.dispatch('removeAbility', `ability${id}`)
        },

        submitUnit() {
            event.preventDefault()
            let unit = {
                user: this.username,
                name: this.unitName,
                abilities: this.$store.getters.getUnitAbilities,
                notes: this.notes
            }
            console.log(unit)
        }
    },
    components: {
        newAbility
    }
}
</script>