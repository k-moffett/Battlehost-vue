const userController = require('../../db/controllers/userController')
const encrypt = require('../../tools/encrypt')

module.exports = (app) => {

    app.post('/signup', async (req, res) => {
        let signup = await userController.validateSignupForm('signup', req.body.data)
        if (signup.error) {
            res.send(signup)
        }
        if (signup.success) {
            let sessid = await encrypt(signup.success.sessid)
            delete signup.success.sessid
            res.cookie('sessid', sessid).send(signup)
        }
    });

}
