const Post = require("../../models/postModel");

const makeNewPost = (req, res) => {
    const post = new Post(req.body)
    post.save()
        .then((response) => {
            res.send(response)
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = makeNewPost;
