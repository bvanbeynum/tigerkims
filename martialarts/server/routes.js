var path = require("path");

module.exports = function (app) {
	
	// Pages   =======================================================================
	
	app.get("/", function (request, response) {
		response.sendFile("index.html", { root: path.join(__dirname, "../client") });
	});
	
	// Static Content =================================================================
	
	app.get("/robots.txt", function (request, response) {
		response.send(
			"User-agent: *\r\n" +
			"Disallow: /"
		);
	});
	
	app.get("/*.*", function (request, response) {
		var filePath,
			file = request.path.substring(request.path.indexOf("/") + 1),
			extension = request.path.substring(request.path.lastIndexOf("."), request.path.length);
		
		if (request.path.toLowerCase().indexOf("/masterkim") == 0) {
			file = file.replace("masterkim/", "");
			filePath = "../masterkim";
		}
		else {
			switch (extension) {
			case ".html":
				filePath = "../client/pages";
				break;
			
			case ".css":
				filePath = "../client/css";
				break;
			
			case ".js":
				filePath = "../client/js";
				break;
			
			default:
				filePath = "../client/media";
			}
		}
		
		response.sendFile(file, { root: path.join(__dirname, filePath) });
	});

};