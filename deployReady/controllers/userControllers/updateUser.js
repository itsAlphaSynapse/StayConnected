const User = require("../../models/userModel");

const updateUser = (req, res) => {
    User.findOneAndUpdate({ email: req.body.email }, req.body, { new: true })
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {

        })
}

module.exports = updateUser;