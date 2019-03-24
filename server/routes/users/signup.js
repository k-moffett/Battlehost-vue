const userController = require('../../db/controllers/userController')

module.exports = (app) => {

    app.post('/signup', async (req, res) => {
        let signup = await userController.validateSignupForm('signup', req.body.data)
        if (signup.error) {
            console.log(signup.error)
            res.send(signup.error)
        }
        if (signup.success) {
            console.log(signup.success)
            res.cookie('sessid', signup.success.sessid).send(signup)
        }
    });

}
