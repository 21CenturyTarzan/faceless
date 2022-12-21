const express = require("express");
const router = express.Router();

const User = require('../../models/user.model');

const app = express();

module.exports = function() {
    router.route("/register").post(function (req, res) {
        console.log("req");
        // User.create({
        //     firstName: req.body.data.firstname,
        //     lastName: req.body.data.lastName,
        //     username: req.body.data.username,
        //     email: req.body.data.email,
        //     password: req.body.data.password,
        //     token: md5(req.body.data.username+"__"+req.body.data.password),
        //     role: 0,
        // }, function (err, data) {
        //     console.log(data);
        //     if (!err) {
        //         res.send({ state: "success" });
        //     }
        // });
    });

    return router;
}