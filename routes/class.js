
exports.initialize = function(req, res) {    
	// Your code goes here
	var data = require('../data.json');
	var allClasses = data.Classes;
	var allUsers = data.Students;
	var classData = req.query;
	var output = {};
	output.students = [];
	output.classInfo = classData;
	for (var i = 0; i < data.Classes.length; i++){
	
		if(classData.sectionID == allClasses[i].section){
			for (var s = 0; s < allClasses[i].students.length;s++){
				for(var a = 0; a < allUsers.length; a++){	
					if(allClasses[i].students[s].id == allUsers[a].id){
						output.students.push(allUsers[a]);
						break;
					}
				}
			}
		}
	}
	res.render('class',output);

 }