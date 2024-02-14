const addToConnectedUsers = require('./socketControllers/addToConnectedUsers');
const chatMessage = require('./socketControllers/chatMessage');
const authUserForSocket = require('./socketMiddleware/authUserForSocket');

let connectedUsers = [];

let socketController = (io) => {

    const chatNamespace = io.of('/chat');

    chatNamespace.use(authUserForSocket);

    chatNamespace.on('connection', (socket) => {

        console.log('ek user he' + socket.id + socket.user)
        chatNamespace.emit('message from server', 'this is dummy message')

        if (socket.user === 'not aurhorized') {
            socket.disconnect();
        } else {

            connectedUsers = addToConnectedUsers(socket, connectedUsers);
            console.log(connectedUsers)

            socket.on('chat message', (msg) => {
                console.log(msg)
                chatMessage(msg, chatNamespace, connectedUsers)
            });

            socket.on('disconnect', () => {
                // Find the index of the object with the target socketId
                const indexOfObject = connectedUsers.findIndex(obj => obj.socketId === socket.id);

                if (indexOfObject !== -1) {
                    connectedUsers.splice(indexOfObject, 1);
                    console.log('Object removed successfully.');
                    console.log('Updated array:', connectedUsers);
                }
            });
        }
    });
};

module.exports = socketController;
