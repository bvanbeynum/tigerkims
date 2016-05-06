tigerApp.factory("tigerData", function () {
	var _data = {};
	
	_data.belts = [
		{ 
			name: "White Belt",
			color: "rgb(255,255,255)",
			philosophy: "Focus",
			tipRequirements: [ 
				{ color: "Yellow", requirement: "Stances, Kicks" },
				{ color: "Green", requirement: "Form (Kibon Poomse) steps 1-8, Kicks" },
				{ color: "Blue", requirement: "Form (Kibon Poomse) steps 1-8, with blocks & punches, Kicks" },
				{ color: "Red", requirement: "Form (Kibon Poomse) steps 1-16, Kicks" },
				{ color: "Black", requirement: "Knowledge or all requirements, ready to test for Yellow Belt" }
			],
			testingRequirements: [
				"Horse Riding Stance, and punch",
				"Front Snap Kick, Roundhouse Kick",
				"Board Breaking (Hammer Fist)",
				"Knowledge of Korean Terminology",
				"Kibon Poomse Basic Form"
			],
			form: {
				segments: [
					[{x:120, y:45}, {x:210, y:45}],
					[{x:30, y:45}, {x:120, y:45}],
					[{x:120, y:45}, {x:120, y:105}],
					[{x:120, y:105}, {x:120, y:165}],
					[{x:120, y:165}, {x:120, y:225}],
					[{x:120, y:225}, {x:120, y:285}],
					[{x:30, y:285}, {x:120, y:285}],
					[{x:120, y:285}, {x:210, y:285}]
				],
				steps: [
					{ 							time: 12,	text: ["Ready Stance"] }, 
					{ number: "1",	segment: 0,	time: 15.5,	text: ["Forward Stance", "Down Block"] }, 
					{ number: "2",	segment: 0,	time: 17,	text: ["Forward Stance", "Middle Punch"] }, 
					{ number: "3",	segment: 1,	time: 18.5,	text: ["Forward Stance", "Down Block"] }, 
					{ number: "4",	segment: 1,	time: 20,	text: ["Forward Stance", "Middle Punch"] }, 
					{ number: "5",	segment: 2,	time: 21.5,	text: ["Forward Stance", "Down Block"] },
					{ number: "6",	segment: 3,	time: 23,	text: ["Forward Stance", "Middle Punch"] },
					{ number: "7",	segment: 4,	time: 24.5,	text: ["Forward Stance", "Middle Punch"] },
					{ number: "8",	segment: 5,	time: 25.5,	text: ["Forward Stance", "Middle Punch", "Kihap"] },
					{ number: "9",	segment: 6,	time: 27.2,	text: ["Forward Stance", "Down Block"] },
					{ number: "10",	segment: 6,	time: 28.5,	text: ["Forward Stance", "Middle Punch"] },
					{ number: "11",	segment: 7,	time: 30,	text: ["Forward Stance", "Down Block"] },
					{ number: "12",	segment: 7,	time: 31.5,	text: ["Forward Stance", "Middle Punch"] },
					{ number: "13",	segment: 5,	time: 32.7,	text: ["Forward Stance", "Down Block"] },
					{ number: "14",	segment: 4,	time: 34.5,	text: ["Forward Stance", "Middle Punch"] },
					{ number: "15",	segment: 3,	time: 36,	text: ["Forward Stance", "Middle Punch"] },
					{ number: "16",	segment: 2,	time: 37,	text: ["Forward Stance", "Middle Punch", "Kihap"] },
					{ 							time: 43, 	text: ["Ready Stance"] }
				]
			},
			terms: [
				{ 
					category: "General Terms",
					words: [
						{ english: "White Belt Form",		korean: "Kibon Poomse", 				audio: "/0/terms/WhiteBeltForm.ogg#t=1.2", time: [1.2] },
						{ english: "Uniform",				korean: "Dobok", 						audio: "/0/terms/Uniform.ogg#t=1", time: [1] },
						{ english: "School",				korean: "Dojang",						audio: "/0/terms/School.ogg#t=1", time: [1] }
					]
				},
				{ 
					category: "Commands",
					words: [
						{ english: "Attention",				korean: "Cha-Ryot",						audio: "/0/terms/Attention.ogg#t=1.2", time:[1.2] },
						{ english: "Bow",					korean: "Kyong-Yet", 					audio: "/0/terms/Bow.ogg#t=1", time: [1] },
						{ english: "Bow to the Master",		korean: "Sabum-Nim Kae Kyong-Yet",		audio: "/0/terms/BowToTheMaster.ogg#t=1.7", time: [1.7] },
						{ english: "Bow to the Instructor",	korean: "Suhn-Bae-Nim Kae Kyong-Yet",	audio: "/0/terms/BowToTheInstructor.ogg#t=1.5", time: [1.5] },
						{ english: "Bow to the Flags",		korean: "Kukiae Dae Hiyo Kyong-Yet",	audio: "/0/terms/BowToTheFlag.ogg#t=1.5", time: [1.5] }
					]
				},
				{ 
					category: "Counting",
					words: [
						{ english: "One",					korean: "Hana", 						audio: "/0/terms/Count.ogg#t=1,2", time: [1,2] },
						{ english: "Two",					korean: "Dul",							audio: "/0/terms/Count.ogg#t=3,4", time: [3,4] },
						{ english: "Three",					korean: "Set",							audio: "/0/terms/Count.ogg#t=5.5,7", time: [5.5,7] },
						{ english: "Four",					korean: "Net",							audio: "/0/terms/Count.ogg#t=8,9", time: [8,9] },
						{ english: "Five",					korean: "Dahseot",						audio: "/0/terms/Count.ogg#t=10.5,11.2", time: [10.5,11.2] },
						{ english: "Six",					korean: "Yahseot",						audio: "/0/terms/Count.ogg#t=13,14", time: [13,14] },
						{ english: "Seven",					korean: "Il-gop",						audio: "/0/terms/Count.ogg#t=15.5,16.5", time: [15.5,16.5] },
						{ english: "Eight",					korean: "Yodol",						audio: "/0/terms/Count.ogg#t=18,19", time: [18,19] },
						{ english: "Nine",					korean: "Ahop", 						audio: "/0/terms/Count.ogg#t=20.5,21.5", time: [20.5,21.5] },
						{ english: "Ten",					korean: "Yol",							audio: "/0/terms/Count.ogg#t=23,24", time: [23,24] }
					]
				},
				{ 
					category: "Techniques",
					words: [
						{ english: "Front Snap Kick",		korean: "Ahp Cha-gi",					audio: "/0/terms/FrontSnapKick.ogg#t=1.7", time: [1.7] },
						{ english: "Roundhouse Kick",		korean: "Dol-Yoh Cha-gi",				audio: "/0/terms/RoundHouseKick.ogg#t=1.5", time: [1.7] }
					]
				},
				{ 
					category: "Courtesy Phrases",
					words: [
						{ english: "Thank You",				korean: "Kahm Sa Hamneeda",				audio: "/0/terms/ThankYou.ogg" },
						{ english: "You're Welcome",		korean: "Chan Mahn Aeyo",				audio: "/0/terms/YoureWelcome.ogg" }
					]
				}
			]
		},
		{ 
			name: "Yellow Belt", 
			color: "rgb(245,245,50)",
			philosophy: "Consistency",
			tipRequirements: [
				{ color: "Blue", requirement: "Knowledge and execution of entire form: Taegeuk Il Jahng" },
				{ color: "Green", requirement: "Knowledge and proper execution of kicking techniques" },
				{ color: "White", requirement: "Knowledge and proper execution of breaking technique" },
				{ color: "Black", requirement: "Knowledge or all requirements, ready to test for Green Stripe" }
			],
			testingRequirements: [
				"Two kick combinations",
				"Kyuk-pa (board breaking) axe kick",
				"Knowledge of Korean Terms 2",
				"Taegeuk Il Jahng"
			],
			form: {
				segments: [
					[{x:120, y:45}, {x:210, y:45}],
					[{x:30, y:45}, {x:120, y:45}],
					[{x:120, y:45}, {x:120, y:165}],
					[{x:30, y:165}, {x:120, y:165}],
					[{x:120, y:165}, {x:210, y:165}],
					[{x:120, y:165}, {x:120, y:285}],
					[{x:120, y:285}, {x:210, y:285}],
					[{x:30, y:285}, {x:120, y:285}]
				],
				steps: [
					{ time: 12.5, text: ["Ready Stance"] },
					{ number: "1", segment: 0, time: 16.2, text: ["Walking Stance", "Down Block"] },
					{ number: "2", segment: 0, time: 17.8, text: ["Walking Stance", "Middle Punch"] },
					{ number: "3", segment: 1, time: 19, text: ["Walking Stance", "Down Block"] },
					{ number: "4", segment: 1, time: 20.1, text: ["Walking Stance", "Middle Punch"] },
					{ number: "5a", segment: 2, time: 21.4, text: ["Forward Stance", "Down Block"] },
					{ number: "5b", segment: 2, time: 22.5, text: ["Forward Stance", "Middle Punch"] },
					{ number: "6", segment: 3, time: 23.1, text: ["Walking Stance", "Inside Body Block"] },
					{ number: "7", segment: 3, time: 24.3, text: ["Walking Stance", "Middle Punch"] },
					{ number: "8", segment: 4, time: 25.6, text: ["Walking Stance", "Inside Body Block"] },
					{ number: "9", segment: 4, time: 26.9, text: ["Walking Stance", "Middle Punch"] },
					{ number: "10a", segment: 5, time: 28.1, text: ["Forward Stance", "Down Block"] },
					{ number: "10b", segment: 5, time: 29.3, text: ["Forward Stance", "Middle Punch"] },
					{ number: "11", segment: 6, time: 29.9, text: ["Walking Stance", "Face Block"] },
					{ number: "12a", segment: 6, time: 31, text: ["Front Snap Kick"] },
					{ number: "12b", segment: 6, time: 32, text: ["Walking Stance", "Middle Punch"] },
					{ number: "13", segment: 7, time: 33, text: ["Walking Stance", "Face Block"] },
					{ number: "14a", segment: 7, time: 34.2, text: ["Front Snap Kick"] },
					{ number: "14b", segment: 7, time: 35.3, text: ["Walking Stance", "Middle Punch"] },
					{ number: "15", segment: 5, time: 36.2, text: ["Forward Stance", "Down Block"] },
					{ number: "16", segment: 2, time: 37.6, text: ["Forward Stance", "Middle Punch", "Khap"] },
					{ time: 43, text: ["Ready Stance"] }
				]
			},
			terms: [
				{
					category: "General Terms",
					words: [
						{ english: "Yellow Belt Form", korean: "Taegeuk Il Jahng", audio: "/1/terms/YellowBeltForm.ogg", time: [2] },
						{ english: "Forms", korean: "Poomse", audio: "/1/terms/Forms.ogg", time: [2] }
					]
				},
				{
					category: "Commands",
					words: [
						{ english: "Ready", korean: "Choom-bee", audio: "/1/terms/Ready.ogg", time: [1.5] },
						{ english: "Return", korean: "Bar-ro", audio: "/1/terms/Return.ogg", time: [1.3] },
						{ english: "At Ease", korean: "Shee-arh", audio: "/1/terms/AtEase.ogg", time: [1.7] }
					]
				},
				{
					category: "Techniques",
					words: [
						{ english: "Walking Stance", korean: "Ahp Sahgi", audio: "/1/terms/WalkingStance.ogg", time: [1.5] },
						{ english: "Forward Stance", korean: "Ahp Goobi", audio: "/1/terms/ForwardStance.ogg", time: [2] },
						{ english: "Horse Riding Stance", korean: "Choo-Choom Sahgi", audio: "/1/terms/HorseRidingStance.ogg", time: [2] },
						{ english: "Axe Kick", korean: "Chick Aw Cha-gi", audio: "/1/terms/AxKick.ogg", time: [1.3] }
					]
				},
				{
					category: "General Phrases",
					words: [
						{ english: "Hello", korean: "Annyong Ha Shim Neeka", audio: "/1/terms/Hello.ogg", time: [1.5] },
						{ english: "Good To See You", korean: "Bangop Sahmneeda", audio: "/1/terms/GoodToSeeYou.ogg", time: [2] }
					]
				}
			]
		},
		{ 
			name: "Green Stripe", 
			color: "rgb(245, 245, 50)", 
			stripeColor: "rgb(54, 134, 54)",
			philosophy: "Goal Setting",
			tipRequirements: [
				{ color: "Blue", requirement: "Knowledge and execution of entire form: Taegeuk Ee Jahng" },
				{ color: "Green", requirement: "Knowledge and proper execution of kicking techniques" },
				{ color: "White", requirement: "Knowledge and proper execution of breaking technique" },
				{ color: "Black", requirement: "Knowledge or all requirements, ready to test for Green Belt" }
			],
			testingRequirements: [
				"Two kick combinations",
				"Kyuk-pa (board breaking) axe kick",
				"Knowledge of Korean Terms",
				"Taegeuk Ee Jahng"
			],
			form: {
				segments: [
					[{x:120, y:45}, {x:210, y:45}],
					[{x:30, y:45}, {x:120, y:45}],
					[{x:120, y:45}, {x:120, y:165}],
					[{x:120, y:165}, {x:210, y:165}],
					[{x:30, y:165}, {x:120, y:165}],
					[{x:120, y:165}, {x:120, y:285}],
					[{x:30, y:285}, {x:120, y:285}],
					[{x:120, y:285}, {x:210, y:285}]
				],
				steps: [
					{ time: 12.5, text: ["Ready Stance"] },
					{ number: "1", segment: 0, time: 15.4, text: ["Walking Stance", "Down Block"] },
					{ number: "2", segment: 0, time: 16.9, text: ["Forward Stance", "Middle Punch"] },
					{ number: "3", segment: 1, time: 18.2, text: ["Walking Stance", "Down Block"] },
					{ number: "4", segment: 1, time: 19.7, text: ["Forward Stance", "Middle Punch"] },
					{ number: "5", segment: 2, time: 21, text: ["Walking Stance", "Inside Body Block"] },
					{ number: "6", segment: 2, time: 22.3, text: ["Walking Stance", "Inside Body Block"] },
					{ number: "7", segment: 3, time: 23.7, text: ["Walking Stance", "Down Block"] },
					{ number: "8a", segment: 3, time: 24.8, text: ["Front Snap Kick"] },
					{ number: "8b", segment: 3, time: 25.8, text: ["Forward Stance", "Face Punch"] },
					{ number: "9", segment: 4, time: 27, text: ["Walking Stance", "Down Block"] },
					{ number: "10a", segment: 4, time: 28.2, text: ["Front Snap Kick"] },
					{ number: "10b", segment: 4, time: 29.2, text: ["Forward Stance", "Face Punch"] },
					{ number: "11", segment: 5, time: 30.2, text: ["Walking Stance", "Face Block"] },
					{ number: "12", segment: 5, time: 31.7, text: ["Walking Stance", "Face Block"] },
					{ number: "13", segment: 6, time: 33.1, text: ["Walking Stance", "Inside Body Block"] },
					{ number: "14", segment: 7, time: 34.6, text: ["Walking Stance", "Inside Body Block"] },
					{ number: "15", segment: 5, time: 35.9, text: ["Walking Stance", "Down Block"] },
					{ number: "16a", segment: 5, time: 37.3, text: ["Front Snap Kick"] },
					{ number: "16b", segment: 5, time: 38.2, text: ["Walking Stance", "Middle Punch"] },
					{ number: "17a", segment: 2, time: 39.2, text: ["Front Snap Kick"] },
					{ number: "17b", segment: 2, time: 40.1, text: ["Walking Stance", "Middle Punch"] },
					{ number: "18a", segment: 2, time: 41, text: ["Front Snap Kick"] },
					{ number: "18b", segment: 2, time: 42, text: ["Walking Stance", "Middle Punch", "Kihap"] },
					{ time: 47.7, text: ["Ready Stance"] }
				]
			},
			terms: [{
					category: "General Terms",
					words: [
						{ english: "Green Stripe Form", korean: "Tae Geuk Ee Jahng", audio: "/2/terms/greenstripeform.ogg", time: [1.8] },
						{ english: "Breaking", korean: "Kyukpa", audio: "/2/terms/breaking.ogg", time: [1.4] }
					]
				},{
					category: "Commands",
					words: [
						{ english: "Start", korean: "Sheejak", audio: "/2/terms/start.ogg", time: [1.6] },
						{ english: "Finish", korean: "Keumahn", audio: "/2/terms/finish.ogg", time: [1.4] }
					]
				},{
					category: "Techniques",
					words: [
						{ english: "Body Block", korean: "Momtong Maki", audio: "/2/terms/bodyblock.ogg", time: [1.2] },
						{ english: "Down Block", korean: "Arrae Maki", audio: "/2/terms/downblock.ogg", time: [1.5] },
						{ english: "Face Block", korean: "Olgool Maki", audio: "/2/terms/faceblock.ogg", time: [1.6] },
						{ english: "Side Kick", korean: "Yop Cha-gi", audio: "/2/terms/sidekick.ogg", time: [1.6] }
					]
				},{
					category: "Courtesy Phrases",
					words: [
						{ english: "Excuse Me ", korean: "Shil Ray Hamneeda", audio: "/2/terms/excuseme.ogg", time: [1.7] },
						{ english: "I'm Sorry", korean: "Me Ahn Hamneeda", audio: "/2/terms/imsorry.ogg", time: [1.8] }
					]
				}]
		},
		{ 
			name: "Green Belt",
			color: "rgb(54, 134, 54)",
			philosophy: "Cooperation",
			tipRequirements: [
				{ color: "Blue", requirement: "Knowledge and execution of entire form: Taegeuk Sam Jahng" },
				{ color: "Green", requirement: "Knowledge and proper execution of kicking combinations & sparring technique" },
				{ color: "White", requirement: "Knowledge and proper execution of board breaking technique (side Kick)" },
				{ color: "Red", requirement: "Knowledge and proper execution of all 3 Ho-shin-sool self-defense techniques" },
				{ color: "Black", requirement: "Knowledge or all requirements, ready to test for Blue Stripe" }
			],
			testingRequirements: [
				"Kyuk-pa (board breaking) side kick",
				"Knowledge of Korean Terms 4",
				"Free Sparring",
				"Taegeuk Sam Jahng",
				"Green Belt Ho-shin-sool : 1-3 Single wrist grabs"
			],
			form: {
				segments: [
					[{x:120, y:45}, {x:210, y:45}],
					[{x:30, y:45}, {x:120, y:45}],
					[{x:120, y:45}, {x:120, y:165}],
					[{x:120, y:165}, {x:210, y:165}],
					[{x:30, y:165}, {x:120, y:165}],
					[{x:120, y:165}, {x:120, y:285}],
					[{x:30, y:285}, {x:120, y:285}],
					[{x:120, y:285}, {x:210, y:285}]
				],
				steps: [
					{ time: 12.5, text: ["Ready Stance"] },
					{ number: "1", segment: 0, time: 15.7, text: ["Walking Stance", "Down Block"] },
					{ number: "2a", segment: 0, time: 17.1, text: ["Front Snap Kick"] },
					{ number: "2b", segment: 0, time: 17.9, text: ["Forward Stance", "Middle Punch"] },
					{ number: "2c", segment: 0, time: 18.8, text: ["Forward Stance", "Middle Punch"] },
					{ number: "3", segment: 1, time: 19.3, text: ["Walking Stance", "Down Block"] },
					{ number: "4a", segment: 1, time: 20.9, text: ["Front Snap Kick"] },
					{ number: "4b", segment: 1, time: 21.7, text: ["Forward Stance", "Middle Punch"] },
					{ number: "4c", segment: 1, time: 22.4, text: ["Forward Stance", "Middle Punch"] },
					{ number: "5", segment: 2, time: 23.1, text: ["Walking Stance", "Knifehand Strike"] },
					{ number: "6", segment: 2, time: 24.6, text: ["Walking Stance", "Knifehand Strike"] },
					{ number: "7", segment: 3, time: 25.8, text: ["Back Stance", "Knifehand Block"] },
					{ number: "8", segment: 3, time: 26.8, text: ["Forward Stance", "Middle Punch"] },
					{ number: "9", segment: 4, time: 28.2, text: ["Back Stance", "Knifehand Block"] },
					{ number: "10", segment: 4, time: 29.3, text: ["Forward Stance", "Middle Punch"] },
					{ number: "11", segment: 5, time: 30.6, text: ["Walking Stance", "Inside Body Block"] },
					{ number: "12", segment: 5, time: 31.7, text: ["Walking Stance", "Inside Body Block"] },
					{ number: "13", segment: 6, time: 33, text: ["Walking Stance", "Down Block"] },
					{ number: "14a", segment: 6, time: 34.5, text: ["Front Snap Kick"] },
					{ number: "14b", segment: 6, time: 35.3, text: ["Forward Stance", "Middle Punch"] },
					{ number: "14c", segment: 6, time: 36.1, text: ["Forward Stance", "Middle Punch"] },
					{ number: "15", segment: 7, time: 36.7, text: ["Walking Stance", "Down Block"] },
					{ number: "16a", segment: 7, time: 38, text: ["Front Snap Kick"] },
					{ number: "16b", segment: 7, time: 39, text: ["Forward Stance", "Middle Punch"] },
					{ number: "16c", segment: 7, time: 39.9, text: ["Forward Stance", "Middle Punch"] },
					{ number: "17a", segment: 5, time: 40.5, text: ["Walking Stance", "Down Block"] },
					{ number: "17b", segment: 5, time: 41.6, text: ["Walking Stance", "Middle Punch"] },
					{ number: "18a", segment: 5, time: 42.1, text: ["Walking Stance", "Down Block"] },
					{ number: "18b", segment: 5, time: 43.3, text: ["Walking Stance", "Middle Punch"] },
					{ number: "19a", segment: 2, time: 43.9, text: ["Front Snap Kick"] },
					{ number: "19b", segment: 2, time: 44.8, text: ["Walking Stance", "Down Block"] },
					{ number: "19c", segment: 2, time: 45.6, text: ["Walking Stance", "Middle Punch"] },
					{ number: "20a", segment: 2, time: 46.1, text: ["Front Snap Kick"] },
					{ number: "20b", segment: 2, time: 47, text: ["Walking Stance", "Down Block"] },
					{ number: "20c", segment: 2, time: 47.9, text: ["Walking Stance", "Middle Punch", "Kihap"] },
					{ time: 53.4, text: ["Ready Stance"] }
				]
			},
			terms: [{
				category: "General Terms",
				words: [
					{ english: "Green Belt Form", korean: "Tae Geuk Sam Jahng", audio: "/3/terms/greenbeltform.ogg", time: [1.6] },
					{ english: "Self Defense", korean: "Ho Shin Sool", audio: "/3/terms/selfdefense.ogg", time: [1.5] },
					{ english: "Warm Up Exercise", korean: "Joonbi Woondong", audio: "/3/terms/warmupexercise.ogg", time: [2] },
					{ english: "Sparring", korean: "Gyoroogi", audio: "/3/terms/sparring.ogg", time: [1.8] }
				]
			},{
				category: "Commands",
				words: [
					{ english: "Break", korean: "Kahl Yo", audio: "/3/terms/break.ogg", time: [1.2] },
					{ english: "Continue", korean: "Kay Sok", audio: "/3/terms/continue.ogg", time: [1.2] },
					{ english: "Turn Around", korean: "Dweero Dora", audio: "/3/terms/turnaround.ogg", time: [1.8] },
					{ english: "Switch Feet", korean: "Bal Kyo Dae", audio: "/3/terms/switchfeet.ogg", time: [1.5] }
				]
			},{
				category: "Techniques",
				words: [
					{ english: "Back Stance", korean: "Dwee-Goobi", audio: "/3/terms/backstance.ogg", time: [1.6] },
					{ english: "Face Punch", korean: "Olgool Jilugi", audio: "/3/terms/facepunch.ogg", time: [1.3] },
					{ english: "Middle Punch", korean: "Momtong Jilugi", audio: "/3/terms/middlepunch.ogg", time: [1.5] }
				]
			},{
				category: "Courtesy Phrases",
				words: [
					{ english: "Goodbye (Teacher to Student)", korean: "Annyong Hee Ka Ship Sheeyo", audio: "/3/terms/goodbyeteacher.ogg", time: [7.8] },
					{ english: "Goodbye (Student to Teacher)", korean: "Annyong Hee Kay Ship Sheeyo", audio: "/3/terms/goodbyestudent.ogg", time: [8.2] }
				]
			}]
		},
		{ 
			name: "Blue Stripe", 
			color: "rgb(54, 134, 54)", 
			stripeColor: "rgb(78, 78, 220)", 
			philosophy: "Self-control",
			tipRequirements: [
				{ color: "Blue", requirement: "Knowledge and execution of entire form: Taegeuk Sah Jahng" },
				{ color: "Green", requirement: "Knowledge and proper execution of kicking combinations & sparring technique" },
				{ color: "White", requirement: "Knowledge and proper execution of board breaking technique (side Kick)" },
				{ color: "Red", requirement: "Knowledge and proper execution of all 3 Ho-shin-sool self-defense techniques" },
				{ color: "Black", requirement: "Knowledge or all requirements, ready to test for Blue Belt" }
			],
			testingRequirements: [
				"Kyuk-pa (board breaking) side kick",
				"Knowledge of Korean Terms 5",
				"Free Sparring",
				"Taegeuk Sah Jahng",
				"Blue Stripe Ho-shin-sool : 1-3 Double wrist grabs"
			],
			form: {
				segments: [
					[{x:120, y:45}, {x:210, y:45}],
					[{x:30, y:45}, {x:120, y:45}],
					[{x:120, y:45}, {x:120, y:165}],
					[{x:120, y:165}, {x:120, y:285}],
					[{x:30, y:285}, {x:120, y:285}],
					[{x:120, y:285}, {x:210, y:285}],
					[{x:30, y:165}, {x:120, y:165}],
					[{x:120, y:165}, {x:210, y:165}]
				],
				steps: [
					{ time: 12.6, text: ["Ready Stance"] },
					{ number: "1", segment: 0, time: 15.8, text: ["Back Stance", "Double Knifehand Block"] },
					{ number: "2", segment: 0, time: 17.3, text: ["Forward Stance", "Spear Finger Strike"] },
					{ number: "3", segment: 1, time: 18.7, text: ["Back Stance", "Double Knifehand Block"] },
					{ number: "4", segment: 1, time: 20, text: ["Forward Stance", "Spear Finger Strike"] },
					{ number: "5", segment: 2, time: 21.3, text: ["Forward Stance", "Knifehand Face Block and Strike"] },
					{ number: "6a", segment: 2, time: 22.7, text: ["Front Snap Kick"] },
					{ number: "6b", segment: 2, time: 23.4, text: ["Forward Stance", "Middle Punch"] },
					{ number: "7", segment: 3, time: 24.5, text: ["Side Kick"] },
					{ number: "8a", segment: 3, time: 25.4, text: ["Side Kick"] },
					{ number: "8b", segment: 3, time: 27, text: ["Back Stance", "Double Knifehand Block"] },
					{ number: "9", segment: 4, time: 28.3, text: ["Back Stance", "Outside Body Block"] },
					{ number: "10a", segment: 4, time: 29.5, text: ["Front Snap Kick"] },
					{ number: "10b", segment: 4, time: 30.4, text: ["Back Stance", "Inside Body Block"] },
					{ number: "11", segment: 5, time: 31.6, text: ["Back Stance", "Outside Body Block"] },
					{ number: "12a", segment: 5, time: 32.8, text: ["Front Snap Kick"] },
					{ number: "12b", segment: 5, time: 33.8, text: ["Back Stance", "Inside Body Block"] },
					{ number: "13", segment: 3, time: 35.2, text: ["Forward Stance", "Knifehand Face Block and Strike"] },
					{ number: "14a", segment: 3, time: 36.4, text: ["Front Snap Kick"] },
					{ number: "14b", segment: 3, time: 37.3, text: ["Forward Stance", "Backfist Strike"] },
					{ number: "15", segment: 6, time: 38.1, text: ["Walking Stance", "Inside Body Block"] },
					{ number: "16", segment: 6, time: 39.6, text: ["Walking Stance", "Middle Punch"] },
					{ number: "17", segment: 7, time: 40.2, text: ["Walking Stance", "Inside Body Block"] },
					{ number: "18", segment: 7, time: 41.5, text: ["Walking Stance", "Middle Punch"] },
					{ number: "19a", segment: 2, time: 42.1, text: ["Forward Stance", "Inside Body Block"] },
					{ number: "19b", segment: 2, time: 43.4, text: ["Forward Stance", "Middle Punch"] },
					{ number: "19c", segment: 2, time: 43.9, text: ["Forward Stance", "Middle Punch"] },
					{ number: "20a", segment: 2, time: 44.3, text: ["Forward Stance", "Inside Body Block"] },
					{ number: "20b", segment: 2, time: 45.6, text: ["Forward Stance", "Middle Punch"] },
					{ number: "20c", segment: 2, time: 45.9, text: ["Forward Stance", "Middle Punch", "Kihap"] },
					{ time: 50.5, text: ["Ready Stance"] }
				]
			},
			terms: [{
				category: "General Terms",
				words: [
					{ english: "Blue Stripe Form", korean: "Tae Geuk Sah Jahng", audio: "/4/terms/bluestripeform.ogg", time: [1.7] },
					{ english: "Demonstration", korean: "She Bum", audio: "/4/terms/demonstration.ogg", time: [1.5] },
					{ english: "Testing", korean: "Shim Sa", audio: "/4/terms/testing.ogg", time: [0.9] }
				]
			},{
				category: "Techniques",
				words: [
					{ english: "Back Kick", korean: "Dwee Chagi", audio: "/4/terms/backkick.ogg", time: [1.2] },
					{ english: "Knifehand Strike", korean: "Sonnal Chigi", audio: "/4/terms/knifehand.ogg", time: [1.5] }
				]
			},{
				category: "The 5 Tenets of Tae Kwon Do",
				words: [
					{ english: "Courtesy", korean: "Yeh Wee", audio: "/4/terms/courtesy.ogg", time: [1.3] },
					{ english: "Integrity", korean: "Yom Chi", audio: "/4/terms/integrity.ogg", time: [1.6] },
					{ english: "Perseverance", korean: "In Nae", audio: "/4/terms/perseverance.ogg", time: [1.3] },
					{ english: "Self Control", korean: "Guk Ki", audio: "/4/terms/selfcontrol.ogg", time: [1.6] },
					{ english: "Indomitable Spirit", korean: "Baekjul Boolgool", audio: "/4/terms/indomitablespirit.ogg", time: [1.6] }
				]
			}]
		},
		{ 
			name: "Blue Belt", 
			color: "rgb(78, 78, 220)", 
			philosophy: "Perseverance",
			tipRequirements: [
				{ color: "Blue", requirement: "Knowledge and execution of entire form: Taegeuk Oh Jahng" },
				{ color: "Green", requirement: "Knowledge and proper execution of kicking combinations & sparring technique" },
				{ color: "White", requirement: "Knowledge and proper execution of board breaking technique (Back Kick)" },
				{ color: "Red", requirement: "Knowledge and proper execution of all 3 Ho-shin-sool self-defense techniques" },
				{ color: "Black", requirement: "Knowledge or all requirements, ready to test for Red Stripe" }
			],
			testingRequirements: [
				"Kyuk-pa (board breaking) back kick",
				"Free Sparring",
				"Taegeuk Oh Jahng",
				"Blue Belt Ho-shin-sool : 1-3 Shoulder grabs"
			],
			form: {
				segments: [
					[{x:120, y:45}, {x:210, y:45}],
					[{x:30, y:45}, {x:120, y:45}],
					[{x:120, y:45}, {x:120, y:165}],
					[{x:120, y:165}, {x:120, y:285}],
					[{x:30, y:285}, {x:120, y:285}],
					[{x:120, y:285}, {x:210, y:285}],
					[{x:30, y:165}, {x:120, y:165}],
					[{x:120, y:165}, {x:210, y:165}]
				],
				steps: [
					{ time: 12.4, text: ["Ready Stance"] },
					{ number: "1", segment: 0, time: 16.5, text: ["Forward Stance", "Down Block"] },
					{ number: "2", segment: 0, time: 18, text: ["Walking Stance", "Hammer Fist"] },
					{ number: "3", segment: 1, time: 19.3, text: ["Forward Stance", "Down Block"] },
					{ number: "4", segment: 1, time: 20.3, text: ["Walking Stance", "Hammer Fist"] },
					{ number: "5a", segment: 2, time: 21.4, text: ["Forward Stance", "Inside Body Block"] },
					{ number: "5b", segment: 2, time: 22.5, text: ["Forward Stance", "Inside Body Block"] },
					{ number: "6a", segment: 2, time: 23.2, text: ["Front Snap Kick"] },
					{ number: "6b", segment: 2, time: 24, text: ["Forward Stance", "Backfist Strike"] },
					{ number: "6c", segment: 2, time: 24.9, text: ["Forward Stance", "Inside Body Block"] },
					{ number: "7a", segment: 3, time: 25.5, text: ["Front Snap Kick"] },
					{ number: "7b", segment: 3, time: 26.4, text: ["Forward Stance", "Backfist Strike"] },
					{ number: "7c", segment: 3, time: 27.3, text: ["Forward Stance", "Inside Body Block"] },
					{ number: "8", segment: 3, time: 27.9, text: ["Forward Stance", "Backfist Strike"] },
					{ number: "9", segment: 4, time: 29.4, text: ["Back Stance", "Knifehand Block"] },
					{ number: "10", segment: 4, time: 30.6, text: ["Forward Stance", "Elbow Strike"] },
					{ number: "11", segment: 5, time: 32.2, text: ["Back Stance", "Knifehand Block"] },
					{ number: "12", segment: 5, time: 33.5, text: ["Forward Stance", "Elbow Strike"] },
					{ number: "13a", segment: 3, time: 34.8, text: ["Forward Stance", "Down Block"] },
					{ number: "13b", segment: 3, time: 35.9, text: ["Forward Stance", "Inside Body Block"] },
					{ number: "14a", segment: 3, time: 36.6, text: ["Front Snap Kick"] },
					{ number: "14b", segment: 3, time: 37.5, text: ["Forward Stance", "Down Block"] },
					{ number: "14c", segment: 3, time: 38.6, text: ["Forward Stance", "Inside Body Block"] },
					{ number: "15", segment: 6, time: 39.3, text: ["Forward Stance", "Face Block"] },
					{ number: "16a", segment: 6, time: 40.7, text: ["Side Kick"] },
					{ number: "16b", segment: 6, time: 42, text: ["Forward Stance", "Elbow Target Strike"] },
					{ number: "17", segment: 7, time: 43.3, text: ["Forward Stance", "Face Block"] },
					{ number: "18a", segment: 7, time: 44.8, text: ["Side Kick"] },
					{ number: "18b", segment: 7, time: 46, text: ["Forward Stance", "Elbow Target Strike"] },
					{ number: "19a", segment: 2, time: 47.4, text: ["Forward Stance", "Down Block"] },
					{ number: "19b", segment: 2, time: 48.5, text: ["Forward Stance", "Inside Body Block"] },
					{ number: "20a", segment: 2, time: 49.2, text: ["Front Snap Kick"] },
					{ number: "20b", segment: 2, time: 50.2, text: ["Cross Stance", "Backfist Strike", "Kihap"] },
					{ time: 55.8, text: ["Ready Stance"] }
				]
			}
		},
		{ 
			name: "Red Stripe", 
			color: "rgb(78, 78, 220)", 
			stripeColor: "rgb(241, 40, 40)", 
			philosophy: "Enthusiasm",
			tipRequirements: [
				{ color: "Blue", requirement: "Knowledge and execution of entire form: Taegeuk Yuk Jahng"},
				{ color: "Green", requirement: "Knowledge and proper execution of kicking combinations & sparring technique"},
				{ color: "White", requirement: "Knowledge and proper execution of board breaking technique (Back Kick)"},
				{ color: "Red", requirement: "Knowledge and proper execution of all 3 Ho-shin-sool self-defense techniques"},
				{ color: "Black", requirement: "Knowledge or all requirements, ready to test for Red Belt"}
			],
			testingRequirements: [
				"Kyuk-pa (board breaking) back kick",
				"Gyo-roo-gi (free sparring)",
				"Take Home Exam",
				"Taegeuk Yuk Jahng",
				"Red Stripe Ho-shin-sool : 1-3 Back Shoulder grabs"
			],
			form: {
				segments: [],
				steps: []
			}
		},
		{ 
			name: "Red", 
			color: "rgb(241, 40, 40)", 
			philosophy: "Confidence",
			tipRequirements: [
				{ color: "Blue", requirement: "Knowledge and execution of entire form: Taegeuk Chil Jahng" },
				{ color: "Green", requirement: "Knowledge and proper execution of kicking combinations & sparring technique" },
				{ color: "White", requirement: "Knowledge and proper execution of board breaking technique (Spinning Kick)" },
				{ color: "Red", requirement: "Knowledge and proper execution of all 3 Ho-shin-sool self-defense techniques" },
				{ color: "Black", requirement: "Knowledge or all requirements, ready to test for Black Stripe" }
			],
			testingRequirements: [
				"Kyuk-pa (board breaking) spinning kick",
				"Gyo-roo-gi (free sparring)",
				"Essay",
				"Taegeuk Chil Jahng",
				"Red Belt Ho-shin-sool : 2 hair grabs & 1 belt grab"
			],
			form: {
				segments: [],
				steps: []
			}
		},
		{ 
			name: "Black Stripe", 
			color: "rgb(241, 40, 40)", 
			stripeColor: "black",
			philosophy: "",
			tipRequirements: [
				{ color: "", requirement: ""}
			],
			testingRequirements: [
				""
			],
			form: {
				segments: [
				],
				steps: [
				]
			}
		},
		{ name: "Double Black Stripe", color: "rgb(241, 40, 40)", stripeColor: "rgb(0,0,0)", doubleColor: "rgb(0,0,0)" },
		{ name: "Black Belt", color: "rgb(0,0,0)" }
		];
	
	_data.profile = {
		name: "Cooper van Beynum",
		belts: [
			{ 
				receivedDate: new Date(2013, 10, 8),
				tips: [ 
					{color: "yellow", receivedDate: new Date(2013, 10, 28) },
					{color: "green", receivedDate: new Date(2013, 11, 12) },
					{color: "blue", receivedDate: new Date(2013, 11, 13) },
					{color: "red", receivedDate: new Date(2013, 11, 15) },
					{color: "black", receivedDate: new Date(2014, 0, 16) }
				]
			},
			{ 
				receivedDate: new Date(2014, 0, 23),
				tips: [
					{ color: "blue", receivedDate: new Date(2014, 1, 17) },
					{ color: "green", receivedDate: new Date(2014, 1, 29) },
					{ color: "white", receivedDate: new Date(2014, 2, 12) },
					{ color: "black", receivedDate: new Date(2014, 2, 18) }
				]
			},
			{ 
				receivedDate: new Date(2014, 2, 27),
				tips: [
					{ color: "blue", receivedDate: new Date(2014, 3, 10) },
					{ color: "green", receivedDate: new Date(2014, 3, 21) },
					{ color: "white", receivedDate: new Date(2014, 4, 10) },
					{ color: "black", receivedDate: new Date(2014, 4, 23) }
				]
			},
			{ 
				receivedDate: new Date(2014, 4, 29),
				tips: [
					{ color: "white", receivedDate: new Date(2014, 5, 9) },
					{ color: "green", receivedDate: new Date(2014, 5, 15) },
					{ color: "red", receivedDate: new Date(2014, 6, 5) },
					{ color: "blue", receivedDate: new Date(2014, 6, 18) },
					{ color: "black", receivedDate: new Date(2014, 7, 10) }
				]
			},
			{ 
				receivedDate: new Date(2014, 7, 28),
				tips: [
					{ color: "white", receivedDate: new Date(2014, 8, 14) },
					{ color: "green", receivedDate: new Date(2014, 8, 20) },
					{ color: "red", receivedDate: new Date(2014, 9, 14) },
					{ color: "blue", receivedDate: new Date(2014, 10, 14) },
					{ color: "black", receivedDate: new Date(2014, 10, 21) }
				]
			},
			{ 
				receivedDate: new Date(2014, 10, 27),
				tips: [
					{ color: "white", receivedDate: new Date(2014, 11, 3) },
					{ color: "green", receivedDate: new Date(2014, 11, 10) },
					{ color: "red", receivedDate: new Date(2015, 0, 25) },
					{ color: "blue", receivedDate: new Date(2015, 1, 15) },
					{ color: "black", receivedDate: new Date(2015, 1, 21) }
				]
			},
			{ 
				receivedDate: new Date(2015, 1, 26),
				tips: [
					{ color: "white", receivedDate: new Date(2015, 2, 28) },
					{ color: "green", receivedDate: new Date(2015, 3, 11) },
					{ color: "red", receivedDate: new Date(2015, 3, 20) },
					{ color: "blue", receivedDate: new Date(2016, 3, 27) },
					{ color: "black", receivedDate: new Date(2016, 4, 12) }
				]
			},
			{ 
				receivedDate: new Date(2015, 4, 28),
				tips: [
					{ color: "white", receivedDate: new Date(2015, 5, 22) },
					{ color: "green", receivedDate: new Date(2015, 5, 29) },
					{ color: "red", receivedDate: new Date(2015, 7, 7) },
					{ color: "blue", receivedDate: new Date(2016, 7, 10) },
					{ color: "black", receivedDate: new Date(2016, 7, 12) }
				]
			},
			{ 
				receivedDate: new Date(2015, 7, 27),
				tips: [
					{ color: "white", receivedDate: new Date(2015, 8, 8) },
					{ color: "green", receivedDate: new Date(2015, 8, 22) },
					{ color: "red", receivedDate: new Date(2015, 9, 20) },
					{ color: "blue", receivedDate: new Date(2016, 9, 27) },
					{ color: "black", receivedDate: new Date(2016, 10, 4) }
				]
			},
			{ 
				receivedDate: new Date(2015, 10, 26),
				tips: [
					{ color: "white", receivedDate: new Date(2015, 11, 5) },
					{ color: "green", receivedDate: new Date(2015, 11, 11) },
					{ color: "red", receivedDate: new Date(2015, 11, 20) },
					{ color: "blue", receivedDate: new Date(2016, 0, 27) },
					{ color: "black", receivedDate: new Date(2016, 1, 4) }
				]
			},
			{ 
				receivedDate: new Date(2016, 1, 25)
			}
		]
	};
	
	_data.users = [0];
	
	_data.users[0].profile = {
		name: "Cooper van Beynum",
		belts: [
			{ 
				receivedDate: new Date(2014, 7, 22), 
				tips: [ 
					{color: "yellow", receivedDate: new Date(2014, 7, 28) },
					{color: "green", receivedDate: new Date(2014, 8, 12) },
					{color: "blue", receivedDate: new Date(2014, 8, 18) },
					{color: "red", receivedDate: new Date(2014, 9, 5) },
					{color: "black", receivedDate: new Date(2014, 9, 20) }
				]
			},
			{ 
				receivedDate: new Date(2014, 9, 28),
				tips: [
					{ color: "blue", receivedDate: new Date(2014, 10, 17) },
					{ color: "green", receivedDate: new Date(2014, 10, 29) },
					{ color: "white", receivedDate: new Date(2014, 11, 12) },
					{ color: "black", receivedDate: new Date(2014, 11, 18) }
				]
			},
			{ 
				receivedDate: new Date(2014, 11, 27),
				tips: [
					{ color: "blue", receivedDate: new Date(2015, 0, 12) },
					{ color: "green", receivedDate: new Date(2015, 0, 15) },
					{ color: "white", receivedDate: new Date(2015, 1, 14) },
					{ color: "black", receivedDate: new Date(2015, 1, 20) }
				]
			},
			{ 
				receivedDate: new Date(2015, 1, 26),
				tips: [
					{ color: "white", receivedDate: new Date(2015, 2, 22) },
					{ color: "green", receivedDate: new Date(2015, 3, 8) },
					{ color: "red", receivedDate: new Date(2015, 3, 30) },
					{ color: "blue", receivedDate: new Date(2015, 4, 5) },
					{ color: "black", receivedDate: new Date(2015, 4, 15) }
				]
			},
			{ 
				receivedDate: new Date(2015, 4, 28),
				tips: [
					{ color: "white", receivedDate: new Date(2015, 5, 14) },
					{ color: "green", receivedDate: new Date(2015, 6, 10) },
					{ color: "red", receivedDate: new Date(2015, 6, 13) },
					{ color: "blue", receivedDate: new Date(2015, 7, 14) },
					{ color: "black", receivedDate: new Date(2015, 7, 20) }
				]
			},
			{ 
				receivedDate: new Date(2015, 7, 27),
				tips: [
					{ color: "white", receivedDate: new Date(2015, 8, 3) },
					{ color: "green", receivedDate: new Date(2015, 8, 10) },
					{ color: "red", receivedDate: new Date(2015, 9, 20) },
					{ color: "blue", receivedDate: new Date(2015, 10, 2) },
					{ color: "black", receivedDate: new Date(2015, 10, 5) }
				]
			},
			{ 
				receivedDate: new Date(2015, 10, 19),
				tips: [
					{ color: "white", receivedDate: new Date(2015, 10, 28) },
					{ color: "green", receivedDate: new Date(2015, 11, 11) },
					{ color: "red", receivedDate: new Date(2015, 11, 20) },
					{ color: "blue", receivedDate: new Date(2016, 0, 27) },
					{ color: "black", receivedDate: new Date(2016, 1, 4) }
				]
			},
			{ name: "Red Belt", color: "rgb(241, 40, 40)", receivedDate: new Date(2016, 1, 25) }
		]
	};
	
	_data.beltTimeline = [
		{ name: "White Belt", color: [255,255,255], months: 2 },
		{ name: "Yellow Belt", color: [245,245,50], months: 2 },
		{ name: "Green Stripe", color: [245,245,50], stripe: [54,134,54], months: 2 },
		{ name: "Green Belt", color: [54,134,54], months: 3 },
		{ name: "Blue Stripe", color: [54,134,54], stripe: [78,78,220], months: 3 },
		{ name: "Blue Belt", color: [78,78,220], months: 3 },
		{ name: "Red Stripe", color: [78,78,220], stripe: [241,40,40], months: 3 },
		{ name: "Red Belt", color: [241,40,40], months: 3 },
		{ name: "Black Stripe", color: [241,40,40], stripe: [0,0,0], months: 3 },
		{ name: "Dbl Black Stripe 1st Mtn", color: [241,40,40], stripe: [0,0,0], double: true, months: 3 },
		{ name: "Dbl Black Stripe 2st Mtn", color: [241,40,40], stripe: [0,0,0], double: true, months: 3 },
		{ name: "Poom Belt", color: [0,0,0], color2: [241,40,40] }
	];
	
	_data.posts = [{
			time: new Date(2016,0,12,22,1),
			user: { name: "Mike Wanthal", pic: "/pics/mike.jpg" },
			to: "Friends of Tae Kwon Do",
			text: "",
			type: "image",
			content: { img: "/posts/1.jpg" },
			seen: 35,
			like: 3,
			comments: [
				{ user: { name: "Cindy Jackson Wanthal", pic: "/pics/cindy.jpg"}, text: "Does this mean you are practicing poomse in your hotel room?", time: new Date(2016,1,12,22,34) },
				{ user: { name: "Mike Wanthal", pic: "/pics/mike.jpg"}, text: "No. Foot injury.", time: new Date(2016,1,12,22,49), comments: [{ user: { name: "Cindy Jackson Wanthal", pic: "/pics/cindy.jpg"}, text: "You can still do sit ups.", time: new Date(2012,1,12,22,54) }] }
			]
		},{
			time: new Date(2015,11,12,21,17),
			user: { name: "Tiger Kim's", pic: "/pics/tiger.jpg" },
			to: "Public",
			text: "Congratulations December 2016 Black Belt Group!",
			type: "image",
			content: { img: "/posts/2.jpg" },
			seen: 463,
			like: 341,
			comments: [
				{ user: { name: "Cindy Jackson Wanthal", pic: "/pics/cindy.jpg"}, text: "Congratulations to everyone", time: new Date(2015,12,12,21,34), comments: [{ user: { name: "Mike Wanthal", pic: "/pics/mike.jpg" }, text: "Next year for us!", time: new Date(2015,12,13,9,47) }] },
				{ user: { name: "Laura Podlasek", pic: "/pics/laura.jpg" }, text: "Congratulations! Well Done", time: new Date(2015,12,13,14,39), comments: [] },
				{ user: { name: "Adèle Wörz", pic: "/pics/adele.jpg" }, text: "Congratulations!", time: new Date(2015,12,13,14,55), comments: [] }
			]
		},{
			time: new Date(2015,5,21,12,25),
			user: { name: "Tega Cay School", pic: "/pics/tiger.jpg" },
			to: "Tega Cay School",
			text: "Father's Day Fun",
			type: "image",
			content: { img: "/posts/3.jpg" },
			seen: 42,
			like: 15,
			comments: [
				{ user: { name: "Mike Wanthal", pic: "/pics/mike.jpg"}, text: "What fun", time: new Date(2015,6,22,10,26), comments: [] },
				{ user: { name: "Laura Podlasek", pic: "/pics/laura.jpg" }, text: "Happy Father's Day", time: new Date(2015,6,22,14,52), comments: [] }
			]
		}
	];
	
	_data.students = [
		{ name: "Brett van Beynum", category: "Men's Group", startDate: new Date(2014,11,14), belt: "Dbl Black Stripe" },
		{ name: "Matthew Hill", category: "Men's Group", startDate: new Date(2014,11,14), belt: "Red Belt" },
		{ name: "Sk Jung", category: "Tiger Kim's", startDate: new Date(2014,11,14), belt: "2nd Dan" },
		{ name: "Kristie Joe Johnson", category: "Student", startDate: new Date(2014,11,14), belt: "Red Stripe" },
		{ name: "Kaylee Loyst", category: "Student", startDate: new Date(2014,11,14), belt: "1st Dan" },
		{ name: "Taylor Boyd", category: "Student", startDate: new Date(2014,11,14), belt: "1st Dan" },
		{ name: "Amanda Boyd", category: "Student", startDate: new Date(2014,11,14), belt: "1st Dan" },
		{ name: "Kate Hyde", category: "Student", startDate: new Date(2014,11,14), belt: "Red Belt" },
		{ name: "Mike Wanthal", category: "Men's Group", startDate: new Date(2014,11,14), belt: "Dbl Black Stripe" },
		{ name: "Sam Glover", category: "Men's Group", startDate: new Date(2014,11,14), belt: "2nd Dan" },
		{ name: "Cindy Wanthal", category: "Friend", startDate: new Date(2014,11,14), belt: "Dbl Black Stripe" },
		{ name: "Matt Klapeke", category: "Men's Group", startDate: new Date(2014,11,14), belt: "1st Dan" },
		{ name: "Steven Hoang", category: "Friend", startDate: new Date(2014,11,14), belt: "Dbl Black Stripe" },
		{ name: "Sita van Beynum", category: "Family", startDate: new Date(2014,11,14), belt: "Red Stripe" },
		{ name: "Luke van Beynum", category: "Family", startDate: new Date(2014,11,14), belt: "1st Dan" },
		{ name: "Cooper van Beynum", category: "Family", startDate: new Date(2014,11,14), belt: "Red Belt" },
		{ name: "Master J Kim", category: "Tiger Kim's", startDate: new Date(2014,11,14), belt: "Master" },
		{ name: "Todd Kim", category: "Tiger Kim's", startDate: new Date(2014,11,14), belt: "2nd Dan" }
	];
	
	_data.schools = [{
		name: "Tega Cay",
		location: "2435 West Highway 160, Tega Cay, SC 29708",
		phone: "(803) 548-0110",
		scheduleGroups: [{
			name: "Little Tigers",
			colors: { header: "rgb(254, 255, 57)", firstColumn: "rgb(254, 254, 173)" },
			schedules: [{ 
				name: "Low (White to Yellow Stripe)",
				times: ["5:45 - 6:15", "4:25 - 4:55", "5:05 - 5:35", "", "4:25 - 4:55", "10:15 - 10:45" ]
			}, {
				name: "High (Green Stripe & Higher)",
				times: ["6:15 - 6:45", "4:25 - 4:55", "5:05 - 5:35", "", "4:55 - 5:25", "10:15 - 10:45"]
			}]
		}, {
			name: "Children",
			colors: { header: "rgb(227, 148, 64)", firstColumn: "rgb(239, 205, 165)" },
			schedules: [{
				name: "White Belt Kids",
				times: ["5:05 - 5:45", "3:45 - 4:25", "5:35 - 6:15", "", "3:45 - 4:25", "10:45 - 11:30**"]
			}, {
				name: "Yellow Belt Kids",
				times: ["4:25 - 5:05", "4:55 - 5:35", "", "5:45 - 6:25", "3:45 - 4:25", "10:45 - 11:30**"]
			}, {
				name: "Green Belt Kids",
				times: ["", "5:35 - 6:15", "3:45 - 4:25", "5:05 - 5:45", "5:25 - 6:05", "11:30 - 12:15**"]
			}, {
				name: "Blue Belt Kids",
				times: ["", "5:15 - 6:55", "4:25 - 5:05", "3:45 - 4:25", "5:25 - 6:05", "11:30 - 12:15**"]
			}, {
				name: "Red Belt Kids",
				times: ["3:45 - 4:25", "", "6:15 - 6:55", "4:25 - 5:05", "7:30 - 8:10**", "9:30 - 10:15"]
			}, {
				name: "Sparing Low",
				times: ["", "", "", "", "6:05 - 6:45", ""]
			}, {
				name: "Sparring High",
				times: ["", "", "", "6:25 - 7:05", "", ""]
			}]
		}, {
			name: "Adults",
			colors: { header: "rgb(114, 202, 47)", firstColumn: "rgb(213, 253, 165)" },
			schedules: [{
				name: "Adults (Day)",
				times: ["12:00 - 12: 50", "", "12:00 - 12:50", "", "12:00 - 12:50", ""]
			}, {
				name: "Adults (Evening)",
				times: ["8:15 - 9:05", "8:10 - 9:00", "8:25 - 9:15", "7:50 - 8:40", "", ""]
			}]
		}, {
			name: "Family",
			colors: { header: "rgb(96, 133, 249)", firstColumn: "rgb(174, 206, 252)" },
			schedules: [{
				name: "Family White/Yellow",
				times: ["7:30 - 8:15", "", "7:40 - 8:25", "7:05 - 7:50", "", "10:45 - 11:30"]
			}, {
				name: "Family Green",
				times: ["7:30 - 8:15", "", "7:40 - 8:25", "7:05 - 7:50", "", "11:30 - 12:15"]
			}, {
				name: "Family Blue",
				times: ["7:30 - 8:15", "6:55 - 7:40", "7:40 - 8:25", "", "", "11:30 - 12:15"]
			}, {
				name: "Family Red/Black",
				times: ["7:30 - 8:15", "6:55 - 7:40", "7:40 - 8:25", "", "", "9:30 - 10:15"]
			}]
		}, {
			name: "Black Belt",
			colors: { header: "rgb(216, 0, 0)", firstColumn: "rgb(231, 153, 153)" },
			schedules: [{
				name: "Black Belt",
				times: ["6:45 - 7:30", "", "6:55 - 7:40", "", "6:45 - 7:30", "9:30 - 10:15**"]
			}]
		}]
	}];
	
	tigerLog.data = _data;
	
	return _data;
});