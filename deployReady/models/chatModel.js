const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    person1: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    person2: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    messages: [{
        message: { type: String, required: true },
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    }]
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat;
