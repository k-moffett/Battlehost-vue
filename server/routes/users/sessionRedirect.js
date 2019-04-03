const userController = require('../../db/controllers/userController')

module.exports = (app) => {

    app.post('/sess_redir', async (req, res) => {
        console.log('session redirect check')
        res.send('COOKIE')
    });

}