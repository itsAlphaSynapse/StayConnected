const addToConnectedUsers = (socket, connectedUsers) => {
    let addUser = true;
    if (connectedUsers.length > 0) {
        for (cUser of connectedUsers) {
            if (JSON.stringify(cUser.user._id) === JSON.stringify(socket.user._id)) {
                addUser = false;
                const index = connectedUsers.indexOf(cUser);
                connectedUsers.splice(index, 1);
                connectedUsers.push({ socketId: socket.id, user: socket.user })
                return connectedUsers;
            }
        }
        if (addUser) {
            connectedUsers.push({ socketId: socket.id, user: socket.user })
            return connectedUsers;
        } else {
            return connectedUsers;
        }
    } else {
        connectedUsers.push({ socketId: socket.id, user: socket.user })
        return connectedUsers;
    }
}

module.exports = addToConnectedUsers;