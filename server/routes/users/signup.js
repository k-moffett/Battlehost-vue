const userController = require('../../db/controllers/userController')

module.exports = (app) => {

    // app.post('/signup', asyncMiddleware(signup));
    app.post('/signup', async (req, res) => {
        console.log(await userController.validateEmail(req.body.data))
        // console.log(signup)
        console.log('after signup log')
    });


}
