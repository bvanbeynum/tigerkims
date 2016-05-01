var plan = require('flightplan');

var appName = "tigerkims";
var username = "deploy";
var tmpDir = appName + "-" + new Date().getTime();

// configuration
plan.target("production", [{
	host: "tkd.beynum.com",
	username: username,
	privateKey: "/home/ubuntu/.ssh/id_rsa",
	agent: process.env.SSH_AUTH_SOCK
}]);

// run commands on localhost
plan.local(function(local) {
	local.log("Copy files to remote hosts");
	var filesToCopy = local.exec('git ls-files', {silent: true});
	// rsync files to all the destination's hosts
	local.transfer(filesToCopy, "/tmp/" + tmpDir);
});

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
	remote.log("Move folder to root");
	remote.sudo("cp -R /tmp/" + tmpDir + " ~", {user: username});
	remote.rm("-rf /tmp/" + tmpDir);
	
	remote.log("Install dependencies");
	remote.sudo("npm --production --prefix ~/" + tmpDir + " install ~/" + tmpDir, {user: username});
	
	remote.log("Reload application");
	remote.sudo("ln -snf ~/" + tmpDir + " ~/" + appName, {user: username});
	remote.sudo("systemctl restart " + appName, {user: username});
});