const User = require("../../models/userModel");

const serchUsers = (req, res) => {
    console.log(req.query.key);
    User.find({
        $or: [
            { fname: { $regex: req.query.key || ' ', $options: 'i' } },
            { lname: { $regex: req.query.key || ' ', $options: 'i' } },
            { fname: { $regex: req.query.key.split(' ')[0] || ' ', $options: 'i' }, lname: { $regex: req.query.key.split(' ')[1] || ' ', $options: 'i' } }
        ]
    }, 'fname lname')
        .then((response) => {
            res.send(response)
            console.log(response);
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = serchUsers;
