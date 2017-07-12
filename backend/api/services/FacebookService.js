// const request = require('request');
// const qs = require('querystring');
// const createSendToken = require('./jwt.js')
// const FB = require('fb')
// module.exports = (req, res) => {
//     // const accessTokenUrl = 'https://graph.facebook.com/oauth/access_token';
//     // const graphApi = 'https://graph.facebook.com/me';
//     // const params = {
//     //     client_id: req.body.clientId,
//     //     redirect_uri: req.body.redirectUri,
//     //     client_secret: "985c2ad5d0d2e5ed247b41ce111e6477",
//     //     code: req.body.code

//     // };
//     // request.get({
//     //     url: accessTokenUrl,
//     //     qs: params
//     // }, (err, response, accessToken) => {
//     //     accessToken = qs.parse(accessToken);
//     //     request.get({
//     //         url: graphApi,
//     //         qs: accessToken,
//     //         json: true

//     //     }, (err, response, profile) => {
//     //         User.finOne({
//     //             facebookId: profile.id
//     //         }, (err, usr) => {
//     //             if (usr) {
//     //                 console.log(usr)
//     //                 return createSendToken(usr, res)

//     //             }
//     //             let newUser = new User();
//     //             newUser.facebookId = profile.id;
//     //             newUser.name = profile.name;
//     //             newUser.save(err => {
//     //                 createSendToken(newUser, res);
//     //                 console.log(newUser);
//     //             })
//     //         })
//     //     })
//     // })
// }