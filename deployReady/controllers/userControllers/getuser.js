const User = require("../../models/userModel");

const getuser = (req, res) => {
    User.findById(req.params.id, 'fname lname description')
        .then((response) => {
            res.send(response)
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = getuser;