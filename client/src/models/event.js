// function Event(title, status){

// 	this.title = title;
// 	this.status = status;
	
// }

// Event.prototype = {
// 	save: function(){
//     var url = 'http://localhost:3000/accounts';
//     var request = new XMLHttpRequest();
//     request.open("POST", url);
//     request.setRequestHeader("Content-Type", "application/json");
//     request.onload = function(){
//       if(request.status === 200){
//       }
//     }
//     request.send(JSON.stringify(this));
//   },


// 	getTitle: function(){
// 		return this.title;
// 	},

// 	getStatus: function(event){
// 		return this.status;
// 	}
// }

var Event = function(params){
	this.title = params.title;
	this.status = params.status;
};



module.exports = Event;