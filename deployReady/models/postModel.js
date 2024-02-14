const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', requiredd: true }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;
