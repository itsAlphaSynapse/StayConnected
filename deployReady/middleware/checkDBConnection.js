let connectionWithDB = false;

let changeConnectionWithDB = (param) => {
    connectionWithDB = param;
}

let checkConnectionWithDB = (req, res, next) => {
    connectionWithDB ? next() : res.send("Connection with database failed")
}


module.exports = {
    changeConnectionWithDB,
    connectionWithDB,
    checkConnectionWithDB
}