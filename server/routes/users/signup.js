const userController = require('../../db/controllers/userController')

module.exports = (app) => {

    app.post('/signup', (req, res) => {
        //just create a user for now
        userController.signup(req.body.data)
    });

}
