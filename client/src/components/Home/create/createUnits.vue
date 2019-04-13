<template>
    <div id="create-unit-wrapper">
        <form id='new-unit'>
            <div id='form-title'>
                <div>Unit Name</div>
                <input  
                    type='text'
                    v-model='unitName'
                />

                <button
                    id='add-ability-btn'
                    @click="addNewAbility"
                    >+ Add ability
                </button>
            </div>
                
            <div id='form-body'>
                <newAbility 
                    v-for="n in numberOfAbililties" 
                    :key="n" 
                />

                <div>Notes:</div>
                <textarea
                    id='notes-input'
                    v-model="notes"
                />
            </div>
            
        </form>
    </div>
</template>

<script>
import '../../../scss/createUnits.scss'
import newAbility from './newAbility.vue'

export default {
    name: 'createUnits',
    data: () => ({
        unitName: '',
        numberOfAbililties: 0,
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
            if (this.numberOfAbililties < 5) {
                this.numberOfAbililties++
            } else {
                console.log('incorrect number of abilities')
            }
        }
    },
    components: {
        newAbility
    }
}
</script>