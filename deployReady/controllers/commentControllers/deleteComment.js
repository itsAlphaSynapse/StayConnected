const Comments = require("../../models/commentsModel");

const deleteComment = (req, res) => {
    Comments.findByIdAndDelete(req.params.id)
        .then((response) => {
            Comments.find()
                .then((respon) => {
                    res.send(respon)
                })
                .catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
}
module.exports = deleteComment;