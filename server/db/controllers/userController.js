const models = require('../models')
const userModel = models.models.Users

const userController = {

    async validateEmail(method, data) {
        let lookupEmail = 
            await userModel.findOne({where: {email: data.email}})
            .catch((error) => {console.log('EMAIL LOOKUP ERROR: \n', error)})

        switch(method) {
            case 'signup':
                if (lookupEmail === null) {
                    return this.validateUsername(method, data)
                } else {
                    return {error: 'email in use'}
                }
                break
            default:
                return {error: 'something went wrong...'}
        }

    },

    async validateUsername(method, data) {
        let lookupUsername = 
            await userModel.findOne({where: {username: data.username}})
            .catch((error) => {console.log('USERNAME LOOKUP ERROR: \n', error)})

        switch(method) {
            case 'signup':
                if (lookupUsername === null) {
                    return this.signup(data)
                } else {
                    return {error: 'username in use'}
                }
                break
            default:
                return {error: 'something went wrong...'}
        }
    },

     async signup(data) {
         let createUser = 
            await userModel.create({email: data.email, username: data.username, password: data.password})
            .catch((error) => {console.log('CREATE USER ERROR: \n', error)})
            
            return {success: 'user created'}
    },

}

module.exports = userController