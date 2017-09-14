const jwt = require("jsonwebtoken");

const key = "e6tyfhghjd46r";

function signToken(payload, cb){
    jwt.sign(payload, key, cb);
}

function verifyToken(token, cb){
    jwt.verify(token, key, cb);
}

module.exports = {
    signToken: signToken,
    verifyToken: verifyToken
}