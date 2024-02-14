const User = require('../models/userModel.js')

const checkForUserExist = (req, res, next) => {
    console.log(req.body);
    User.findOne({ email: req.body.email })
        .then((response) => {
            console.log(response);
            if (!response) {
                next()
            } else {
                res.send('User Exist')
            }
        })
        .catch((error) => {
            res.status(500).send(error)
            console.log(error);
        })
}

module.exports = checkForUserExist;