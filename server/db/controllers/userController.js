const models = require('../models')
const userModel = models.models.Users

const userController = {

    async validateEmail(data) {

        let findEmail = await userModel.findOne({where: {email: data.email}})
        if (findEmail === null) { return this.validateUsername(data)}

    },

    async validateUsername(data) {
        let findUsername = await userModel.findOne({where: {username: data.username}})
        console.log('validateUsername')
        return 'returning from validate username'
    },

     async signup(data) {
        console.log('signup controller', data)
    },

}

module.exports = userController