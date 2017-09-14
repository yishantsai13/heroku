const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const signToken = require("./utils/jwt.js").signToken;
const verifyToken = require("./utils/jwt.js").verifyToken;
const router = require("./routers/router.js");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next){
    console.log(new Date());
    next();
});

app.use(router);


app.listen("3000", function(){
    console.log("server start!");
});