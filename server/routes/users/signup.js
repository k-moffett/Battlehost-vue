const userController = require('../../db/controllers/userController')

module.exports = (app) => {

    app.post('/signup', async (req, res) => {
        let signup = await userController.validateEmail('signup', req.body.data)
        if (signup.error) {console.log(signup.error)}
        if (signup.success) {console.log(signup.success)}
    });


}
