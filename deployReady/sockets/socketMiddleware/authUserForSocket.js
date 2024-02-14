const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');


let jwtSecretKey = process.env.JWT_SECRET_KEY;
const authUserForSocket = (socket, next) => {
    const cookiesData = socket.handshake.headers.cookie

    function getCookie(name) {

        if (cookiesData) {
            const cookies = cookiesData.split(';');

            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();

                if (cookie.startsWith(name + '=')) {
                    return cookie.substring(name.length + 1);
                }
            }
        }
        return;
    }

    const cookie = getCookie('userToken')

    if (cookie) {
        const decode = jwt.verify(cookie, jwtSecretKey);
        User.findOne({ email: decode })
            .then((response) => {
                socket.user = response
                next()
            })
            .catch((error) => {
                socket.user = 'not aurhorized'
                next()
            })
    } else {
        socket.user = 'not aurhorized'
        next()
    }
}

module.exports = authUserForSocket;