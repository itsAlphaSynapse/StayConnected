const Chat = require("../../models/chatModel");

const getMessages = (req, res) => {

    console.log(req.query);

    Chat.findOne({
        $or: [
            { person1: req.query.person1, person2: req.query.person2 },
            { person1: req.query.person2, person2: req.query.person1 }
        ]
    })
        .populate('person1 person2', 'fname lname')
        .then((response) => {
            if (response) {
                res.send(response)
            } else {
                const chat = new Chat({ person1: req.query.person1, person2: req.query.person2 })
                chat.save()
                    .then((respon) => {
                        Chat.findById(respon._id)
                            .populate('person1 person2', 'fname lname')
                            .then((resp) => {
                                res.send(resp)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    })
                    .catch((err) => [
                        console.log(err)
                    ])
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = getMessages;
