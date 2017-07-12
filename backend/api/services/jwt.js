const jwt = require('jwt-simple');
const moment = require('moment');
module.exports = (user, res) => {
    let payload = {
        sub: user.id,
        exp: moment().add(10, 'days').unix()
    }
    let token = jwt.encode(payload, "hjkdf");
    res.status(200).send({
        user: user.toJSON(),
        token: tokennpn
    })
}