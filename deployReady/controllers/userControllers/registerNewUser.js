const User = require("../../models/userModel");
const jwt = require('jsonwebtoken');

let jwtSecretKey = process.env.JWT_SECRET_KEY;
const registerNewUser = (req, res) => {
    let user = new User(req.body)
    user.save()
        .then((response) => {
            const token = jwt.sign(response.email, jwtSecretKey);
            // 900000 = 15 min
            res.cookie('userToken', token, { maxAge: 24 * 60 * 60 * 1000 }).send(response);
        })
        .catch((error) => {
            res.status(500).send(error)
            console.log(error);
        })
}

module.exports = registerNewUser;
