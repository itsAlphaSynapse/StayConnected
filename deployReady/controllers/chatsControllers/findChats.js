const Chat = require("../../models/chatModel");

const findChats = (req, res) => {
    Chat.find({
        $or: [
            { person1: req.params.id },
            { person2: req.params.id }
        ]
    })
        .populate('person1 person2', 'fname lname')
        .exec()
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = findChats;