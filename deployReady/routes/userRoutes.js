const router = require('express').Router();
const registerNewUser = require('../controllers/userControllers/registerNewUser');
const checkForUserExist = require('../middleware/checkForUserExist');
const logInUser = require('../controllers/userControllers/logInUser');
const auth = require('../controllers/userControllers/auth');
const logOutUser = require('../controllers/userControllers/logOutUser');
const updateUser = require('../controllers/userControllers/updateUser');
const getuser = require('../controllers/userControllers/getuser');

router.post('/register', checkForUserExist, registerNewUser)
router.post('/login', logInUser)
router.get('/logOut', logOutUser)
router.get('/auth', auth)
router.patch('/update', updateUser)
router.get('/user/:id', getuser)

module.exports = router;