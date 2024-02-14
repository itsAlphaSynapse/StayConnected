const Comments = require("../../models/commentsModel");
const Post = require("../../models/postModel");

const deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then((response) => {
            Comments.deleteMany({ post: req.params.id })
                .then((respon) => {
                    res.send('doneDeleting')
                })
                .catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = deletePost;