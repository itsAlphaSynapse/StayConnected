const User = require("../../models/userModel");
const jwt = require('jsonwebtoken');

let jwtSecretKey = process.env.JWT_SECRET_KEY;
const logInUser = (req, res) => {
    User.findOne(req.body)
        .then((response) => {
            if (response) {
                const token = jwt.sign(response.email, jwtSecretKey);
                // 900000 = 15 min
                res.cookie('userToken', token, { maxAge: 24 * 60 * 60 * 1000 }).send(response);
            }else{
                res.send(response)
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error)
        })
}

module.exports = logInUser;
