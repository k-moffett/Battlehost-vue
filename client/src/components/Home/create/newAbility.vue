<template>
    <div id="new-ability">

            <div id="ability-section1">
                <div>Ability Name</div>
                <input  
                    id='ability-name-input'
                    type='text'
                    autocomplete="off"
                    v-model='abilityName'
                />
            </div>

            <div id="ability-section2">
                <div>Ability Description</div>
                <textarea 
                    id='ability-description-input'
                    type='text'
                    autocomplete="off"
                    v-model='abilityDescription'
                />
            </div>

            <div id='remove-ability'>
                <button
                    id='remove-ability-btn'
                    @click="removeAbility"
                    >x
                </button>
            </div>
    </div>
</template>

<script>

export default {
    name: 'newAbility',
    data: () => ({
    
    }),
    props: ['id'],
    computed: {
        abilityName: {
            get() {
                return this.$store.getters.getAbilityName(`ability${this.id}`)
            },
            set(value) {
                this.$store.dispatch('setUnitAbilityName', {
                    abilityId: `ability${this.id}`,
                    name: value
                })
            }
        },
        abilityDescription: {
            get() {

            },
            set() {

            }
        }
    },
    methods: {
        removeAbility() {
            event.preventDefault()
            this.$emit("removeAbilityClick", this.id )
        }
    }
}
</script>