const addMessage = require('../controllers/chatsControllers/addMessage');
const findChats = require('../controllers/chatsControllers/findChats');
const getMessages = require('../controllers/chatsControllers/getMessages');
const serchUsers = require('../controllers/chatsControllers/serchUsers');

const router = require('express').Router();

// router.route('/post').post(makeNewPost).get(onePost)
// router.route('/getPosts').post(getPosts).get(getAllPosts)
// router.delete('/deletePosts/:id', deletePost)

// router.post('/message', addMessage)
router.get('/chats/:id', findChats)
router.get('/serchUsers', serchUsers)
router.get('/messages', getMessages)

module.exports = router;