const Comments = require("../../models/commentsModel");
const Post = require("../../models/postModel");

const onePost = (req, res) => {
    Post.findById(req.query.id)
        .populate('owner', 'fname lname')
        .exec()
        .then((response) => {
            Comments.find({ post: req.query.id })
                .populate('owner', 'fname lname')
                .exec()
                .then((respon) => {
                    res.send({ post: response, comments: respon })
                })
                .catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
}
module.exports = onePost;
