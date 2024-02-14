const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true }
})

const Comments = mongoose.model('Comments', commentsSchema)

module.exports = Comments;