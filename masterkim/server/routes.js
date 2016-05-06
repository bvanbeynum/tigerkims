var path = require("path");

module.exports = function (app) {
	
	// Pages   =======================================================================
	
	app.get("/", function (request, response) {
		response.sendFile("index.html", { root: path.join(__dirname, "../client") });
	});
	
	app.get("/*.*", function (request, response) {
		var file = request.path.substring(request.path.indexOf("/") + 1);
		
		response.sendFile(file, { root: path.join(__dirname, "../client") });
	});

};