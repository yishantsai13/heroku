const router = require("express").Router();
const path = require("path");
const authRouter = require("./authRouter.js");

//先把 / 路由放進來
router.get("/", function(req, res){
    //路徑要記得更改
    res.sendFile(path.resolve(__dirname, "../views/index.html"));
});

router.use(authRouter);

module.exports = router;