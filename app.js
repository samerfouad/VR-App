var express = require("express"),
app = express(),
http = require("http").Server(app).listen(3000);
app.use("/css", express.static("./css"))
app.use("/js", express.static("./js"))
app.use("/img",express.static("./img"))
console.log("server is running at port 3000")

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
})



