const addComment = require('../controllers/commentControllers/addComment');
const deleteComment = require('../controllers/commentControllers/deleteComment');

const router = require('express').Router();

router.delete('/comment/:id', deleteComment)
router.post('/comment', addComment)

module.exports = router;