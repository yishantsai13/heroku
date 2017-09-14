const signToken = require("../utils/jwt.js").signToken;
const verifyToken = require("../utils/jwt.js").verifyToken;
const path = require("path");

function isLogin(req, res){
    //取得 header 中 Authorization 的值
    let auth = req.header("Authorization");
    //判定是否有傳入 Authorization
    if(auth !== undefined){
        //將 Authorization 以空白區分
        let arr = auth.split(" ");
        //確認前綴是否為 Bearer
        if(arr[0] === "Bearer"){
            let token = arr[1];
            //驗證token
            verifyToken(token, function(err, decoded){
                //錯誤
                if(err){
                    res.json({
                        login: false
                    });
                }else{
                    res.json({
                        login: true,
                        username: decoded.username
                    });
                }
            });
        }else{
            res.json({
                login: false
            });
        }
    }else{
        res.json({
            login: false
        });
    }
}

function loginHtml(req, res){
    res.sendFile(path.resolve(__dirname, "../views/login.html"));
}

function login(req, res){
    let username = req.body.username;
    let password = req.body.password;
    
    if(username === "abc" && password === "123"){
        signToken(
            { username: "abc" },
            function(err, token){
                return res.json({
                    login: true,
                    token: token
                });
            }
        )
    }else{
        return res.json({
            login: false
        })
    }
}

module.exports = {
    isLogin: isLogin,
    login: login,
    loginHtml: loginHtml
}