const Post = require("../../models/postModel");

const getAllPosts = (req, res) => {
    Post.find()
        .populate('owner','fname lname')
        .exec()
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = getAllPosts;