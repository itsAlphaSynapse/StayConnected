const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');

let jwtSecretKey = process.env.JWT_SECRET_KEY;
const auth = (req, res) => {
    if (req.cookies.userToken) {
        const decode = jwt.verify(req.cookies.userToken, jwtSecretKey);
        User.findOne({ email: decode })
            .then((response) => {
                res.send(response)
            })
            .catch((error) => {
                res.status(500).send(error);
            })
    } else {
        res.send('')
    }
}

module.exports = auth;
