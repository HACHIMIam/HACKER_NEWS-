const jwt = require('jwt-simple');
module.exports = (req, res, next) => {

    if (!req.headers || !req.headers.authorization)
        return res.status(401).send({
            message: 'Authentication faild'
        });
    let token = req.headers.authorization
    console.log(token);
    let payload
    payload = jwt.decode(token, "yooi");
    if (!payload.sub) {
        return res.status(200).send({
            message: 'authorized'
        });
    }
    next();

}