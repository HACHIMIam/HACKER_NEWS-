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
                let token = jwt.encode(payload, "hjkdf");
                res.status(200).send({
                    user: usr.toJSON(),
                    token: token
                })
                console.log(res)
                console.log("ed" + res)


            }
            let newUser = {};
            newUser.facebookId = fbId;
            newUser.name = name;
            User.create(newUser).exec((err, newUser) => {
                let payload = {
                    sub: user.id,
                    exp: moment().add(10, 'days').unix()
                }
                let token = jwt.encode(payload, "hjkdf");
                res.status(200).send({

                    user: user.toJSON(),
                    token: tokennpn
                })
                console.log(res)

                console.log(newUser);
            })
        });


        // if yes, get the user information object.
        // store them in the database.
        // generate jwt.
        // send it to the client.
        // else return bad request.
    }
};