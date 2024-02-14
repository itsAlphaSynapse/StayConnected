const Chat = require("../../models/chatModel");

const findAndUpdate = (msg) => {
    return new Promise((resolve, reject) => {
        Chat.findOneAndUpdate({
            $or: [
                { person1: msg.person1, person2: msg.person2 },
                { person1: msg.person2, person2: msg.person1 }
            ]
        }, { $push: { messages: msg.message } },
            { new: true, select: 'messages' })
            .then((response) => {
                resolve(response.messages[response.messages.length - 1])
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}

const chatMessage = (msg, chatNamespace, connectedUsers) => {
    findAndUpdate(msg)
        .then((res) => {
            console.log(res);
            console.log(connectedUsers);
            for (cUser of connectedUsers) {
                if (JSON.stringify(msg.person1) === JSON.stringify(cUser.user._id) || JSON.stringify(msg.person2) === JSON.stringify(cUser.user._id)) {
                    chatNamespace.to(cUser.socketId).emit('message from server', res);
                    console.log('message sent to ' + cUser.socketId)
                }
            }
        })
        .catch((err) => {
            console.log(err)
        })
}


module.exports = chatMessage;
