
var Buckstream = function(){

	this.events = [];

}

Buckstream.prototype = {
	addEvent: function(event){
		this.events.push(event);
	},

	findEventsByTitle: function(title){
		var foundEvent = null;
		for (event of this.events) {
			if(event.title === title){
				foundEvent = event;
			}
		}
		return foundEvent;
	},

}



module.exports = Buckstream;