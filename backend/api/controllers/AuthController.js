/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const FB = require('fb');
const jwt = require('jwt-simple');
const moment = require('moment');
module.exports = {
    facebook(req, res) {
        // check if the token valid w/ facebook


        fbId = req.body.id;
        name = req.body.name;

        User.findOne({
            facebookId: fbId
        }, (err, usr) => {
            if (usr) {

                let payload = {
                    sub: usr.id,
                    exp: moment().add(10, 'days').unix()
                }
                let token = jwt.encode(payload, "yooi");
                res.status(200).send({
                    user: usr.toJSON(),
                    token: token
                })

                console.log(usr)

            } else {
                let newUser = {};
                newUser.facebookId = fbId;
                newUser.name = name;
                User.create(newUser).exec((err, newUser) => {

                    let payload = {
                        sub: newUser.id,
                        exp: moment().add(10, 'days').unix()
                    }
                    let token = jwt.encode(payload, "yooi");

                    res.status(200).send({

                        user: newUser.toJSON(),
                        token: tokennpn
                    })

                    console.log(newUser);
                })
            }
        });



    }
};