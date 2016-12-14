var Event = require('./event.js');

var Buckstream = function(events, onFetchSuccess){

	this.events = [];
 	this.onFetchSuccess = null;

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

	fetchEvents:function(){
		var url = 'http://localhost:3000/test';
		var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if(request.status === 200){
        var sampleEvents = JSON.parse(request.responseText)
        for(event of sampleEvents){
          this.addEvent(new Event(event));
        }
        this.onFetchSuccess();
      }
    }.bind(this);
    request.send(null);

	}
}



module.exports = Buckstream;