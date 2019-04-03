<template>
  <div id="welcome-wrapper">

    <div id="welcome-title">
      <section>
        <p>Welcome to Battlehost</p>
      </section>
    </div> <!-- welcome-title -->

    <div id="welcome-card">
      <section>
        <signup 
          v-if="view === 'signup'" 
          @welcomeClick="toWelcome"
        />
        <signin 
          v-else-if="view === 'signin'"
          @welcomeClick="toWelcome" 
        />
        <welcome 
          v-else 
          @signupClick="toSignup" 
          @signinClick="toSignin" 
        />
      </section>

    </div> <!-- welcome-card -->
  </div> <!-- welcome-wrapper -->
</template>

<script>
const axios = require('axios')
const sessionRedirect = require('../tools/sessionRedirect')

import '../scss/Landing.scss'
import welcome from '../components/Landing/welcome.vue'
import signup from '../components/Landing/signup.vue'
import signin from '../components/Landing/signin.vue'

export default {
    name: 'Landing',
    data: () => ({
      view: "welcome"
  }),

  beforeMount() {
    //check for user session
    let sessidCheck = sessionRedirect(document.cookie.split(';'))
    if (sessidCheck.data === true) {
      //check sessid on backend
      console.log("sessid TRUE")
      axios.post('/sess_redir', {
        data: 'yoyoyoyo'
      })
      .then((response) => {
        consle.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    } else {
      console.log('FALSE',sessidCheck)
    }
  },

  methods: {
    toSignup() {
      this.view = "signup"
    },
    toSignin() {
      this.view = "signin"
    },
    toWelcome() {
      this.view = "welcome"
    }
  },

  components: {
    welcome,
    signup,
    signin
  }
}
</script>