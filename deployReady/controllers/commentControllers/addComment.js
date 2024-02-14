const Comments = require("../../models/commentsModel");

const addComment = (req, res) => {
    console.log(req.body);
    const comment = new Comments(req.body)
    comment.save()
        .then((response) => {
            Comments.find({ post: req.body.post })
            .populate('owner','fname lname')
            .exec()
                .then((respon) => {
                    console.log(respon);
                    res.send(respon)
                })
                .catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = addComment;