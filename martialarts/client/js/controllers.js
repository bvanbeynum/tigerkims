tigerApp.controller("navCtl", ["$scope", "$location", function ($scope, $location) {
	$scope.navClick = function (navPath) {
		$location.path(navPath);
		return;
	};
}]);

tigerApp.controller("homeCtl", function($scope, $location, tigerData) {
	$scope.posts = tigerData.posts;
	
	var updateComments = function (comments) {
		comments.forEach(function (comment) {
			if ((new Date() - comment.time) < (60 * 1000)) {
				comment.timeMessage = "less than a minute ago";
			}
			else if ((new Date() - comment.time) < (60 * 60 * 1000)) {
				comment.timeMessage = Math.round((new Date() - comment.time) / (60 * 1000)) + "m ago";
			}
			else if ((new Date() - comment.time) < (24 * 60 * 60 * 1000)) {
				comment.timeMessage = Math.round((new Date() - comment.time) / (60 * 60 * 1000)) + "h ago";
			}
			else {
				comment.timeMessage = (comment.time.getMonth() + 1) + "/" + comment.time.getDate() + "/" + comment.time.getFullYear();
			}
			
			if (comment.comments && comment.comments.length > 0) {
				updateComments(comment.comments);
			}
		});
	};
	
	$scope.posts.forEach(function (post) {
		if ((new Date() - post.time) < (60 * 1000)) {
			post.timeMessage = "less than a minute ago";
		}
		else if ((new Date() - post.time) < (60 * 60 * 1000)) {
			post.timeMessage = Math.round((new Date() - post.time) / (60 * 1000)) + "m ago";
		}
		else if ((new Date() - post.time) < (24 * 60 * 60 * 1000)) {
			post.timeMessage = Math.round((new Date() - post.time) / (60 * 60 * 1000)) + "h ago";
		}
		else {
			post.timeMessage = (post.time.getMonth() + 1) + "/" + post.time.getDate() + "/" + post.time.getFullYear();
		}
		
		if (post.comments) {
			updateComments(post.comments);
		}
	});
});

tigerApp.controller("profileCtl", function($scope, $location, $routeParams, tigerData) {
	$scope.belts = tigerData.beltTimeline.map(function (belt, index) {
		if (index < tigerData.profile.belts.length) {
			belt.receivedDate = tigerData.profile.belts[index].receivedDate;
			belt.tips = tigerData.profile.belts[index].tips;
		}
		return belt;
	});
	
	$scope.startDate = tigerData.profile.belts[0].receivedDate;
	$scope.lastBeltDate = tigerData.profile.belts[tigerData.profile.belts.length - 1].receivedDate;

	var monthsRemaining = $scope.belts.map(function (belt, index) {
		if (index + 1 >= tigerData.profile.belts.length) {
			return belt.months || 0; // black belt doesn't have months
		}
		else {
			return 0;
		}
	})
	.reduce(function (prev, curr) {
		return prev + curr;
	});
	
	$scope.endDate = tigerData.profile.belts[tigerData.profile.belts.length - 1].receivedDate;
	if (monthsRemaining > 0) {
		var testMonths = [3, 7, 11];
		$scope.endDate  = new Date(new Date($scope.lastBeltDate).setMonth($scope.lastBeltDate.getMonth() + monthsRemaining));
		
		var nextMonthTest = testMonths.reduce(function (prev, curr) {
			return (prev - $scope.endDate.getMonth() > 0 && prev - $scope.endDate.getMonth() < curr - $scope.endDate.getMonth()) ? prev : curr;
		});
		$scope.endDate.setMonth(nextMonthTest);
	}
	
	var setBadgeOpacity = function () {
		var badgesDiv = document.getElementsByClassName("badges")[0],
			badges = badgesDiv.getElementsByTagName("img"),
			divTop = badgesDiv.offsetTop + badgesDiv.scrollTop + 20,
			divBottom = divTop + badgesDiv.clientHeight - 20,
			imgTop, 
			imgHeight, 
			imgBottom;
		
		for (var imgIndex = 0; imgIndex < badges.length; imgIndex++) {
			imgTop = badges[imgIndex].offsetTop,
				imgHeight = badges[imgIndex].clientHeight,
				imgBottom = imgTop + imgHeight;
			
			if (divTop > imgTop && divTop < imgBottom) {
				badges[imgIndex].style.opacity = (imgBottom - divTop) / imgHeight;
			}
			else if (divBottom > imgTop && divBottom < imgBottom) {
				badges[imgIndex].style.opacity = (divBottom - imgTop) / imgHeight;
			}
		}
	};
	
	setBadgeOpacity();
	$scope.badgeScroll = setBadgeOpacity;
	
	$scope.navigate = function (url) {
		$location.path(url);
		return;
	};
});

tigerApp.controller("friendsCtl", function($scope, $location, tigerData) {
	$scope.categories = d3.nest()
		.key(function (student) {
			return student.category;
		})
		.entries(tigerData.students)
		.map(function (group) {
			return {
				name: group.key,
				people: group.values
			};
		});
	
	$scope.navigate = function (url) {
		$location.path(url);
		return;
	};
});

tigerApp.controller("friendCtl", function($scope, $location, tigerData) {
	$scope.my = {};
	$scope.friend = {};
	
	$scope.my.belts = tigerData.beltTimeline.map(function (belt, index) {
		if (index < tigerData.profile.belts.length) {
			belt.receivedDate = tigerData.profile.belts[index].receivedDate;
			belt.tips = tigerData.profile.belts[index].tips;
		}
		return belt;
	});
	
	$scope.navigate = function (url) {
		$location.path(url);
		return;
	};
});

tigerApp.controller("schoolCtl", function ($scope, $location, tigerData) {
	$scope.dayOfWeek = (new Date()).getDay();
	$scope.schoolName = tigerData.schools[0].name;
	$scope.schoolLocation = tigerData.schools[0].location;
	
	$scope.buttons = [
		{ name: "School", url: "/school" },
		{ name: "Belts", url: "/belts" }
	];
	
	$scope.scheduleGroups = tigerData.schools[0].scheduleGroups;
	
	$scope.navigate = function (url) {
		$location.path(url);
		return;
	};
});

tigerApp.controller("beltsCtl", function($scope, $location, tigerData) {
	$scope.belts = tigerData.belts;
	
	$scope.beltClick = function (beltIndex) {
		$location.path("/belt/" + beltIndex);
		return;
	};
	
	$scope.buttons = [
		{ name: "School", url: "/school" },
		{ name: "Belts", url: "/belts" }
	];

	$scope.navigate = function (url) {
		$location.path(url);
		return;
	};
});

tigerApp.controller("beltCtl", ["$scope", "$location", "$routeParams", "tigerData", function ($scope, $location, $routeParams, tigerData) {
	if (!$routeParams.index) {
		$location.path("/belts");
		return;
	}
	
	var belt = tigerData.belts[$routeParams.index];
	
	$scope.beltName = belt.name;
	$scope.leftBar = belt.color;
	$scope.rightBar = (belt.stripeColor) ? belt.stripeColor : belt.color;
	
	$scope.philosophy = belt.philosophy;
	$scope.tip = belt.tipRequirements;
	$scope.testing = belt.testingRequirements;
	
	$scope.buttons = [];
	$scope.buttons.push({ name: "School", url: "/school" });
	$scope.buttons.push({ name: "All Belts", url: "/belts" });
	$scope.buttons.push({ name: "Belt", url: "/belt/" + $routeParams.index });
	if (belt.form) $scope.buttons.push({ name: "Form", url: "/form/" + $routeParams.index });
	if (belt.terms) $scope.buttons.push({ name: "Terms", url: "/terms/" + $routeParams.index });
	if (belt.selfDefense) $scope.buttons.push({ name: "Self Defense", url: "/defense/" + $routeParams.index });
	$scope.buttons.push({ name: "Testing", url: "/testing/" + $routeParams.index });
	
	$scope.navigate = function (url) {
		$location.path(url);
		return;
	};
}]);

tigerApp.controller("formCtl", ["$scope", "$location", "$routeParams", "$window", "tigerData", function ($scope, $location, $routeParams, $window, tigerData) {
	if (!$routeParams.index) {
		$location.path("/");
		return;
	}
	
	var belt = tigerData.belts[$routeParams.index],
		pauseTime = 0,
		video;
	
	$scope.beltName = belt.name;
	$scope.leftBar = belt.color;
	$scope.rightBar = (belt.stripeColor) ? belt.stripeColor : belt.color;
	
	$scope.beltName = belt.name;
	$scope.beltIndex = $routeParams.index;
	$scope.videoSrc = "/" + $scope.beltIndex + "/form.mp4#t=" + d3.min(belt.form.steps, function (step) { return step.time; }) + "," + (d3.max(belt.form.steps, function (step) { return step.time; }) + 1);
	$scope.stepSegments = belt.form.segments;
	$scope.currentIndex = 0;
	$scope.cards = belt.form.steps;
	$scope.statusImg = "/pause.png";

	$scope.selectSegment = function (segmentIndex) {
		for (var stepIndex = 0; stepIndex < belt.form.steps.length; stepIndex++) {
			if (belt.form.steps[stepIndex].segment == segmentIndex) {
				$scope.currentIndex = stepIndex;
				video.currentTime = belt.form.steps[$scope.currentIndex].time;
				$scope.$apply();
				break;
			}
		}
	};
	
	$scope.isLoaded = function (event) {
		video = event.srcElement;
		video.currentTime = belt.form.steps[0].time;
	};
	
	$scope.canPlay = function (event) {
		video.play();
	};
	
	var intervalController = setInterval(function () {
		if (video) {
			var checkNext = ($scope.currentIndex < belt.form.steps.length - 1) ? $scope.currentIndex + 1 : 0;
			// console.log("p:" + pauseTime + ", c:" + checkNext + ", t:" + belt.form.steps[checkNext].time);
			if (pauseTime > 0) {
				pauseTime -= 100;
				
				if (pauseTime <= 0) {
					$scope.$apply(function () {
						if (checkNext == 0) {
							video.currentTime = belt.form.steps[0].time;
						}
						
						$scope.currentIndex = checkNext;
						video.play();
					});
				}
			}
			else {
				
				if (belt.form.steps[checkNext].time < video.currentTime) {
					pauseTime = 3000;
					video.pause();
				}
			}
		}
	}, 100);
	
	$scope.$on("$locationChangeStart", function (event) {
		$window.clearInterval(intervalController);
	});
	
	$scope.buttons = [];
	$scope.buttons.push({ name: "School", url: "/school" });
	$scope.buttons.push({ name: "All Belts", url: "/belts" });
	$scope.buttons.push({ name: "Belt", url: "/belt/" + $routeParams.index });
	if (belt.form) $scope.buttons.push({ name: "Form", url: "/form/" + $routeParams.index });
	if (belt.terms) $scope.buttons.push({ name: "Terms", url: "/terms/" + $routeParams.index });
	if (belt.selfDefense) $scope.buttons.push({ name: "Self Defense", url: "/defense/" + $routeParams.index });
	$scope.buttons.push({ name: "Testing", url: "/testing/" + $routeParams.index });
	
	$scope.navigate = function (url) {
		$location.path(url);
		return;
	};
}]);

tigerApp.controller("termsCtl", function ($scope, $location, $routeParams, tigerData) {
	if (!$routeParams.index) {
		$location.path("/belts");
		return;
	}
	
	var belt = tigerData.belts[$routeParams.index],
		cardPosition;
	
	$scope.beltIndex = $routeParams.index;
	$scope.beltName = belt.name;
	$scope.categories = belt.terms;
	$scope.leftBar = belt.color;
	$scope.rightBar = (belt.stripeColor) ? belt.stripeColor : belt.color;
	
	$scope.testClick = function (categoryIndex) {
		var category = $scope.categories[categoryIndex];
		category.message = "";
		category.testWords = d3.shuffle(category.words.map(function (word) { return word }));
		
		category.words.forEach(function (word) {
			word.isTest = true;
		});
	};
	
	$scope.cardClick = function (event, word) {
		var audio = event.path[1].getElementsByTagName("audio")[0];
		audio.currentTime = word.time[0];
		audio.play();
		
		if (word.time.length == 2) {
			audio.ontimeupdate = function (event) {
				if (this.currentTime > word.time[1]) {
					this.pause();
					this.currentTime = word.time[0];
					this.ontimeupdate = null;
				}
			};
		}
	};
	
	var parent;
	$scope.touchStart = function (event) {
		event.currentTarget.style.position = "absolute";
		
	};
	
	$scope.touchEnd = function (event) {
		event.currentTarget.style.position = "relative";
	};
	
	$scope.touchMove = function (event) {
		event.currentTarget.style.left = (event.targetTouches[0].pageX - (event.currentTarget.offsetWidth / 2)) + "px";
		event.currentTarget.style.top = (event.targetTouches[0].pageY - (event.currentTarget.offsetHeight / 2)) + "px";
		event.preventDefault();
	};
	
	$scope.drag = function (event) {
		event.dataTransfer.setData("text/plain", this.$index);
	};
	
	$scope.dragOver = function (event) {
		event.preventDefault();
		event.target.classList.add("over");
	};
	
	$scope.dragLeave = function (event) {
		event.preventDefault();
		event.target.classList.remove("over");
	};
	
	$scope.drop = function (event) {
		event.preventDefault();
		
		var testIndex = event.dataTransfer.getData("text");
		var category = this.$parent.category;
		
		if (this.word.korean == category.testWords[testIndex].korean) {
			category.testWords.splice(testIndex, 1);
			this.word.isTest = false;
			category.message = "Correct";
		}
		else {
			category.message = "Wrong";
		}
		
		$scope.$apply();
	};
	
	$scope.buttons = [];
	$scope.buttons = [];
	$scope.buttons.push({ name: "School", url: "/school" });
	$scope.buttons.push({ name: "All Belts", url: "/belts" });
	$scope.buttons.push({ name: "Belt", url: "/belt/" + $routeParams.index });
	if (belt.form) $scope.buttons.push({ name: "Form", url: "/form/" + $routeParams.index });
	if (belt.terms) $scope.buttons.push({ name: "Terms", url: "/terms/" + $routeParams.index });
	if (belt.selfDefense) $scope.buttons.push({ name: "Self Defense", url: "/defense/" + $routeParams.index });
	$scope.buttons.push({ name: "Testing", url: "/testing/" + $routeParams.index });
	
	$scope.navigate = function (url) {
		$location.path(url);
		return;
	};
});
