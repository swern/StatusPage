function Event(title, status){

	this.title = title;
	this.status = status;
	
}

Event.prototype = {
	getTitle: function(){
		return this.title;
	},

	getStatus: function(){
		return this.status;
	}
}





module.exports = Event;