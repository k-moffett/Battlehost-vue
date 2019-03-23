const bcrypt = require('bcrypt');

async function decrypt() {
    let decrypted = await bcrypt.compare(myPlaintextPassword, hash).then(function(res) {
        // res == true will mean a correct password
    })
    return decrypted
}

module.exports = decrypt 