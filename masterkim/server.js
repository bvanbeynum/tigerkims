// Setup =======================================================================

var express = require("express");
var app = express();
var port = process.env.PORT || 7576;

// Routes =======================================================================

require("./server/routes")(app);

// listen (start app with node server.js) ======================================

app.listen(port);
console.log("App listening on port " + port);
