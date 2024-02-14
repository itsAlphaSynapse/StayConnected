const Post = require("../../models/postModel");

const getPosts = (req, res) => {
    Post.find({ owner: req.body.id })
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = getPosts;