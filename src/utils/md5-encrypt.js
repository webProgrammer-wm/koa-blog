const crypto = require('crypto')

module.exports = function(str) {
    const md5 = crypto.createHash('md5')
    return md5.update(str).digest('hex')
}