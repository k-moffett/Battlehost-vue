const path = require('path');

module.exports = (app) => {

	app.post('/signup', (req, res) => {
        console.log('works')
        res.send('trying to sign ')
        
    });

}