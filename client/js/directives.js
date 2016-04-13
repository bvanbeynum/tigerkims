tigerApp.directive("formLayout", function() {
	return {
		restrict: "E",
		scope: {
			segments: "=",
			current: "=",
			lineClick: "&"
		},
		link: function (scope, element) {
			var svg = d3.select(element[0])
				.append("svg")
				.attr({
					width: 240,
					height: 330
				});
			
			svg.selectAll("line")
				.data(scope.segments)
				.enter()
				.append("line")
				.attr({
					class: "formLine",
					x1: function (seg) { return seg[0].x },
					y1: function (seg) { return seg[0].y },
					x2: function (seg) { return seg[1].x },
					y2: function (seg) { return seg[1].y }
				})
				.on("click", function (line, index) {
					scope.lineClick({ segmentIndex: index });
				});
			
			scope.$watch("current", function (newValue, oldValue) {
				d3.selectAll(".formLine").attr({
					class: function (line, index) { 
						return (index == newValue) ? "formLine active" : "formLine"; 
					}
				});
			});
		}
	};
});

tigerApp.directive("timeline", function() {
	return {
		restrict: "E",
		scope: {
			belts: "=",
			startDate: "=",
			endDate: "=",
			lastBeltDate: "="
		},
		link: function (scope, element) {
			var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				padding = {
					left: 5,
					right: 24,
					top: 0,
					bottom: 0
				},
				days = Math.floor((scope.endDate - scope.startDate) / (1000 * 60 * 60 * 24)),
				outerHeight = 320,
				outerWidth = (4 * days) + padding.left + padding.right,
				innerHeight = outerHeight - padding.top - padding.bottom,
				innerWidth = outerWidth - padding.left - padding.right,
				barHeight = 35,
				barTop = ((innerHeight / 2) - (barHeight / 2));
			
			var convert = {
				x: d3.time.scale()
			};
			
			convert.x.range([0, innerWidth]);
			convert.x.domain([scope.startDate, scope.endDate]);
			
			scope.belts.forEach(function (belt, index) {
				if (index == 0) {
					belt.startDate = belt.receivedDate;
				}
				else {
					belt.startDate = scope.belts[index - 1].endDate;
				}
				
				if (index + 1 < scope.belts.length && scope.belts[index + 1].receivedDate) {
					belt.endDate = scope.belts[index + 1].receivedDate;
				}
				else if (index + 1 == scope.belts.length) {
					belt.endDate = scope.endDate;
				}
				else {
					belt.endDate = new Date(new Date(belt.startDate).setMonth(belt.startDate.getMonth() + belt.months));
				}
			});
			
			// Base SVG
			var svg = d3.select(element[0])
				.append("svg")
				.attr({
					width: outerWidth,
					height: outerHeight
				});
			
			// Group area for belts
			var beltArea = svg.append("g")
				.attr({
					transform: "translate(" + padding.left + ")"
				});
			
			// Add belt groups
			var belts = beltArea.selectAll(".beltGroup")
				.data(scope.belts)
				.enter()
				.append("g")
				.attr({
					class: "beltGroup",
					transform: function (belt) {
						return "translate(0, " + barTop + ")";
					}
				});
			
			// Belt rect
			belts.append("rect")
				.attr({
					class: "belt",
					y: 0,
					x: function (belt) { return convert.x(belt.startDate) },
					height: barHeight,
					width: function (belt) { return convert.x(belt.endDate) - convert.x(belt.startDate) },
					fill: function (belt) { 
						if (belt.receivedDate) {
							return "rgb(" + belt.color.join(",") + ")";
						}
						else {
							var gray = Math.round((belt.color[0] + belt.color[1] + belt.color[2]) / 3);
							return "rgb(" + gray + "," + gray + "," + gray + ")";
						}
					},
					stroke: function (belt, index) { return (index == 0) ? "rgb(175, 175, 175)" : "" }
				});
			
			// Stripe rect
			belts.filter(function (belt) { return (belt.stripe) ? true : false; })
				.append("rect")
				.attr({
					class: "stripe",
					y: function (belt) { return (belt.double) ? barHeight * .1 : barHeight * .33; },
					x: function (belt) { return convert.x(belt.startDate); },
					width: function (belt) { return convert.x(belt.endDate) - convert.x(belt.startDate) },
					height: barHeight * .33,
					fill: function (belt) { 
						if (belt.receivedDate) {
							return "rgb(" + belt.stripe.join(",") + ")";
						}
						else {
							var gray = Math.round((belt.stripe[0] + belt.stripe[1] + belt.stripe[2]) / 3);
							return "rgb(" + gray + "," + gray + "," + gray + ")";
						}
					}
				});
			
			// Double stripe
			belts.filter(function (belt) { return (belt.double) ? true : false; })
				.append("rect")
				.attr({
					class: "stripe",
					y: barHeight * .57,
					x: function (belt) { return convert.x(belt.startDate); },
					width: function (belt) { return convert.x(belt.endDate) - convert.x(belt.startDate) },
					height: barHeight * .33,
					fill: function (belt) { 
						if (belt.receivedDate) {
							return "rgb(" + belt.stripe.join(",") + ")";
						}
						else {
							var gray = Math.round((belt.stripe[0] + belt.stripe[1] + belt.stripe[2]) / 3);
							return "rgb(" + gray + "," + gray + "," + gray + ")";
						} }
				});
			
			belts.filter(function (belt) { return (belt.color2) ? true : false; })
				.append("rect")
				.attr({
					class: "color2",
					y: barHeight *.5,
					x: function (belt) { return convert.x(belt.startDate); },
					width: function (belt) { return convert.x(belt.endDate) - convert.x(belt.startDate); },
					height: barHeight * .5,
					fill: function (belt) { 
						if (belt.receivedDate) {
							return "rgb(" + belt.color2.join(",") + ")";
						}
						else {
							var gray = Math.round((belt.color2[0] + belt.color2[1] + belt.color2[2]) / 3);
							return "rgb(" + gray + "," + gray + "," + gray + ")";
						}
					}
				})
			
			belts.selectAll(".tip")
				.data(function (belt) { return (belt.tips) ? belt.tips : [] })
				.enter()
				.append("rect")
				.attr({
					class: "tip",
					x: function (tip) { return convert.x(tip.receivedDate) },
					y: 0,
					width: 10,
					height: barHeight,
					fill: function (tip) { return tip.color }
				});
			
			// Belt name
			var beltText = belts.filter(function (belt, index) { return index > 0; })
				.append("text")
				.attr({
					class: "beltName",
					x: function (belt) { return convert.x(belt.startDate) + 5 },
					y: function (belt, index) { return (index % 2 == 0) ? -107 : 125 },
					fill: function (belt) { return (belt.receivedDate) ? "rgb(0, 165, 239)" : "rgb(200,200,200)"; }
				})
				.text(function (belt) { return belt.name; });
			
			// Date
			belts.filter(function (belt, index) { return index > 0; })
				.append("text")
				.attr({
					class: "receivedText",
					x: function (belt) { return convert.x(belt.startDate) + 5 },
					y: function (belt, index) { return (index % 2 == 0) ? -85 : 145 },
					fill: function (belt) { return (belt.receivedDate) ? "rgb(50, 193, 0)" : "rgb(200,200,200)"; }
				})
				.text(function (belt) { return ((belt.receivedDate) ? "received " : "estimated ") + monthNames[belt.startDate.getMonth()] + " " + belt.startDate.getDate() + ", " + belt.startDate.getFullYear(); });
			
			// Received vert line
			belts.filter(function (belt, index) { return index > 0; })
				.append("line")
				.attr({
					x1: function (belt) { return convert.x(belt.startDate) },
					y1: barHeight * .5,
					x2: function (belt) { return convert.x(belt.startDate) },
					y2: function (belt, index) { return (index % 2 == 0) ? -100 : 130 }
				});
			
			// Received horiz line
			belts.filter(function (belt, index) { return index > 0; })
				.append("line")
				.attr({
					x1: function (belt) { return convert.x(belt.startDate) },
					y1: function (belt, index) { return (index % 2 == 0) ? -100 : 130 },
					x2: function (belt, index) { return convert.x(belt.startDate) + beltText[0][index].getBBox().width + 20 },
					y2: function (belt, index) { return (index % 2 == 0) ? -100 : 130 }
				});
			
			// Received dot
			belts.filter(function (belt, index) { return index > 0; })
				.append("circle")
				.attr({
					r: 8,
					cx: function (belt) { return convert.x(belt.startDate) },
					cy: barHeight * .5,
					fill: function (belt) { return (belt.receivedDate) ? "rgb(65, 170, 199)" : "rgb(0,0,0)" }
				});
			
			// Start line
			svg.append("polygon")
				.attr({
					class: "start",
					points: "0," + (barTop - 10) + " " + 
						"10," + (barTop - 10) + " " +
						"10," + barTop + " " +
						"30," + (barTop + (barHeight / 2)) + " " +
						"10," + (barTop + barHeight) + " " +
						"10," + (barTop + barHeight + 10) + " " +
						"0," + (barTop + barHeight + 10)
				});
			
			var finish = svg.append("g")
				.attr({
					class: "finish",
					transform: "translate(" + convert.x(scope.endDate) + ")"
				});
			
			finish.append("rect")
				.attr({
					x: 0,
					y: 0,
					width: 32,
					height: innerHeight,
					fill: "rgb(0,0,0)"
				});
			
			finish.append("text")
				.attr({
					x: 14,
					y: 50,
					fill: "rgb(245, 217, 39)",
					"writing-mode": "tb"
				})
				.text(monthNames[scope.endDate.getMonth()] + " " + scope.endDate.getDate() + " " + scope.endDate.getFullYear());
			
			var timeline = document.getElementsByTagName("timeline")[0];
			timeline.scrollLeft = convert.x(scope.lastBeltDate) - (timeline.clientWidth / 2);
		}
	};
});

tigerApp.directive("card", function () {
	return {
		restrict: "E",
		scope: {
			profile: "="
		},
		link: function (scope, element) {
			var textResize = function (node, width, height, y, fontSize) {
				for (var index = fontSize; index > 0; index--) {
					if (node.node().getBBox().width > width) {
						node.attr("font-size", index);
					}
					else {
						var box = node.node().getBBox();
						node.attr("x", box.x + ((width - box.width) / 2));
						node.attr("y", y - Math.abs(height - box.height));
						break;
					}
				}
			};
			
			var width = 236,
				height = 326;
			
			var svg = d3.select(element[0])
				.append("svg")
				.attr({
					width: width,
					height: height
				});
			
			svg.append("rect")
				.attr({
					class: "borderRect",
					x: 0,
					y: 0,
					width: width,
					height: height
				});
			
			svg.append("defs").append("pattern")
				.attr({
					id: "imagePattern",
					x: 0,
					y: 0,
					width: 1,
					height: 1
				})
				.append("image")
				.attr({
					width: 236,
					height: 245.81,
					"xlink:href": "/pics/profileimage.jpg"
				});
			
			svg.append("rect")
				.attr({
					x: 1,
					y: 23.23,
					width: width - 1.5,
					height: 245.81,
					fill: "rgb(245,245,245)"
				});
			
			svg.append("rect")
				.attr({
					x: 1,
					y: 23.23,
					width: width - 1.5,
					height: 245.81,
					fill: "url(#imagePattern)"
				});
			
			svg.append("line")
				.attr({
					x1: 1,
					y1: 23.23,
					x2: width - 1.5,
					y2: 23.23
				});
			
			svg.append("line")
				.attr({
					x1: 1,
					y1: 269.04,
					x2: width - 1.5,
					y2: 269.04
				});
			
			svg.append("polygon")
				.attr({
					points: "9.73,35.97 32.97,11.24 203.03,11.24 226.26,35.97"
				});
			
			svg.append("text")
				.attr({
					class: "schoolName",
					x: 61.43,
					y: 30
				})
				.text("Tiger Kim's");
			
			svg.append("polygon")
				.attr({
					points: "56.91,251.06 67.43,235.32, 168.57,235.32 179.81,251.06"
				});
			
			var beltText = svg.append("text")
				.attr({
					x: 68,
					y: 250.31,
					"font-size": 17
				})
				.text(scope.profile.belt);
			textResize(beltText, 101, 18, 252.5, 17);
			
			svg.append("polygon")
				.attr({
					points: "9.73,256 226.26,256 203.03,281 32.97,281"
				});
			
			var studentText = svg.append("text")
				.attr({
					x: 32,
					y: 280.29,
					"font-size": 25
				})
				.text(scope.profile.name);
			textResize(studentText, 170, 25, 280.29, 25);
			
			svg.append("image")
				.attr({
					x: 102.64,
					y: 288.53,
					width: 30,
					height: 30,
					"xlink:href": "/logo.png"
				});
			
			svg.append("line")
				.attr({
					class: "startYear",
					x1: 63.68,
					y1: 292.28,
					x2: 93.65,
					y2: 292.28
				});
			
			svg.append("line")
				.attr({
					class: "startYear",
					x1: 63.68,
					y1: 314.76,
					x2: 93.65,
					y2: 314.76
				});
			
			svg.append("text")
				.attr({
					class: "startYear",
					x: 67,
					y: 310.26
				})
				.text(scope.profile.startDate.getFullYear().toString().substring(0,2));
			
			svg.append("line")
				.attr({
					class: "startYear",
					x1: 141.6,
					y1: 292.28,
					x2: 171.57,
					y2: 292.28
				});
			
			svg.append("line")
				.attr({
					class: "startYear",
					x1: 141.6,
					y1: 314.76,
					x2: 171.57,
					y2: 314.76
				});
			
			svg.append("text")
				.attr({
					class: "startYear",
					x: 143.85,
					y: 310.26
				})
				.text(scope.profile.startDate.getFullYear().toString().substring(2));
			
		}
	};
});

/*

			var width = 315,
				height = 435;
			
			var svg = d3.select(element[0])
				.append("svg")
				.attr({
					width: width,
					height: height
				});
			
			svg.append("rect")
				.attr({
					class: "borderRect",
					x: 0,
					y: 0,
					width: width,
					height: height
				})
			
			svg.append("defs").append("pattern")
				.attr({
					id: "imagePattern",
					x: 0,
					y: 0,
					width: 1,
					height: 1
				})
				.append("image")
				.attr({
					width: 315,
					height: 328,
					"xlink:href": "/pics/profileimage.jpg"
				});
			
			svg.append("rect")
				.attr({
					x: 1,
					y: 31,
					width: width - 2,
					height: 328,
					fill: "rgb(245,245,245)"
				});
			
			svg.append("rect")
				.attr({
					x: 0,
					y: 31,
					width: width,
					height: 328,
					fill: "url(#imagePattern)"
				});
			
			svg.append("line")
				.attr({
					x1: 0,
					y1: 31,
					x2: width,
					y2: 31
				});
			
			svg.append("line")
				.attr({
					x1: 0,
					y1:359,
					x2: width,
					y2: 359
				});
			
			svg.append("polygon")
				.attr({
					points: "13,48 44,15 271,15 302,48"
				});
			
			svg.append("text")
				.attr({
					class: "schoolName",
					x: 82,
					y: 40
				})
				.text("Tiger Kim's");
			
			svg.append("polygon")
				.attr({
					points: "75,335 90,314, 225,314 240,335"
				});
			
			var beltText = svg.append("text")
				.attr({
					x: 93,
					y: 334,
					"font-size": 20
				})
				.text(scope.profile.belt);
			textResize(beltText, 131, 21, 334, 20);
			
			svg.append("polygon")
				.attr({
					points: "13,342 302,342 271,375 44,375"
				});
			
			var studentText = svg.append("text")
				.attr({
					x: 52,
					y: 374,
					"font-size": 25
				})
				.text(scope.profile.name);
			textResize(studentText, 218, 33, 374, 25);
			
			svg.append("image")
				.attr({
					x: 137,
					y: 385,
					width: 40,
					height: 40,
					"xlink:href": "/logo.png"
				});
			
			svg.append("line")
				.attr({
					class: "startYear",
					x1: 85,
					y1: 390,
					x2: 125,
					y2: 390
				});
			
			svg.append("line")
				.attr({
					class: "startYear",
					x1: 85,
					y1: 420,
					x2: 125,
					y2: 420
				});
			
			svg.append("text")
				.attr({
					class: "startYear",
					x: 90,
					y: 414
				})
				.text(scope.profile.startDate.getFullYear().toString().substring(0,2));
			
			svg.append("line")
				.attr({
					class: "startYear",
					x1: 189,
					y1: 390,
					x2: 229,
					y2: 390
				});
			
			svg.append("line")
				.attr({
					class: "startYear",
					x1: 189,
					y1: 420,
					x2: 229,
					y2: 420
				});
			
			svg.append("text")
				.attr({
					class: "startYear",
					x: 192,
					y: 414
				})
				.text(scope.profile.startDate.getFullYear().toString().substring(2));
			
*/