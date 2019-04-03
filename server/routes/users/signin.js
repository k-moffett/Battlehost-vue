const userController = require('../../db/controllers/userController')
const encrypt = require('../../tools/encrypt')

module.exports = (app) => {

    app.post('/signin', async (req, res) => {
        let signin = await userController.validateEmail('signin', req.body.data)
        if (signin.error) {
            res.send(signin)
        }
        if(signin.success) {
            let sessid = await encrypt(signin.success.sessid)
            delete signin.success.sessid
            res.cookie('sessid', sessid).send(signin.success)
        }

    });

}