const userController = require('../../db/controllers/userController')

module.exports = (app) => {

    app.post('/signin', async (req, res) => {
        let signin = await userController.validateEmail('signin', req.body.data)
        console.log(signin)

    });

}