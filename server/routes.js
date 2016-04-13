var path = require("path");
var lwip = require("lwip");

module.exports = function (app) {
	
	// Pages   =======================================================================
	
	app.get("/", function (request, response) {
		response.sendFile("index.html", { root: path.join(__dirname, "../client") });
	});
	
	// Static Content =================================================================
	
	app.get("/*.html", function(request, response) {
		var file = request.path.substring(request.path.indexOf("/") + 1);
		response.sendFile(file, { root: path.join(__dirname, "../client/pages") });
	});
	
	app.get("/*.css", function (request, response) {
		var file = request.path.substring(request.path.indexOf("/") + 1);
		response.sendFile(file, { root: path.join(__dirname, "../client/css") });
	});
	
	app.get("/*.js", function (request, response) {
		var file = request.path.substring(request.path.indexOf("/") + 1);
		response.sendFile(file, { root: path.join(__dirname, "../client/js/") });
	});
	
	app.get("/robots.txt", function (request, response) {
		response.send("User-agent: *\r\n" +
			"Disallow: /");
	});
	
	app.get("/*.*", function (request, response) {
		var file = request.path.substring(request.path.indexOf("/") + 1);
			
		if (request.query.r) {
			lwip.open(path.join(__dirname, "../client/media/" + file), function (error, image) {
				var width = image.width(), 
					height = image.height(),
					batch = image.batch();
					
				if (width > height) {
					batch.resize(request.query.r);
				}
				else {
					batch.resize((request.query.r * width) / height);
				}
				
				batch.toBuffer("png", function (error, buffer) {
					response.setHeader("content-type", "image/jpeg");
					response.send(buffer);
				});
			});
		}
		else {
			response.sendFile(file, { root: path.join(__dirname, "../client/media/") });
		}
	});

};