<template>
    <h1>Home</h1>
</template>

<script>
const sessionRedirect = require('../tools/sessionRedirect')

export default {
    name: 'Home',
    data () {
      return {}
    },

    beforeMount() {
    //check for user session
    let sessidCheck = sessionRedirect(document.cookie.split(';'))
    console.log(sessidCheck)
    if (sessidCheck === true) {

    } else {
      this.$router.push('/')
    }
  },
}
</script>