const logOutUser = (req, res) => {
    res.cookie('userToken', '', { maxAge: 0 }).send('Cookie Deleted');
}

module.exports = logOutUser;