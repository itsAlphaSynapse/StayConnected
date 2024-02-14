const deletePost = require('../controllers/postControllers/deletePost');
const getAllPosts = require('../controllers/postControllers/getAllPosts');
const getPosts = require('../controllers/postControllers/getPosts');
const makeNewPost = require('../controllers/postControllers/makeNewPost');
const onePost = require('../controllers/postControllers/onePost');

const router = require('express').Router();

router.route('/post').post(makeNewPost).get(onePost)
router.route('/getPosts').post(getPosts).get(getAllPosts)
router.delete('/deletePosts/:id', deletePost)

module.exports = router;