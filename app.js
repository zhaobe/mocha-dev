var express = require("express"),
    app = express();
var exports = module.exports = {}; //create exports object

app.get('/', function(req, res) {
    res.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log("Something should be happening on port 3000");
});

//closeServer function to shut down server
exports.closeServer = function() {
    server.close();
}