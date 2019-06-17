var express = require("express"),
app = express(),
http = require("http").Server(app).listen(8080);
app.use("/css", express.static("./css"))
app.use("/js", express.static("./js"))
app.use("/img",express.static("./img"))
app.use(express.static('print.html'))
console.log("server is running at port 8080")

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
})





