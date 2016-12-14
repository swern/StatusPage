var Buckstream = require('./models/buckstream.js');
var Event = require('./models/event.js');
var Status = require('./models/status.js');
var View = require('./view/view.js');

window.onload = function(){
	var Buckstream = new Buckstream(events, null);
	var view = new View(buckstream);

	buckstream.onFetchSuccess = function(){
		view.render()
	}

	buckstream.fetchEvents();

  console.log("webpack app started");


  var form = document.querySelector("#add-event")
   form.onsubmit = function(e){
    e.preventDefault();
    var eventData = {
      title: document.querySelector("#title").value,
      status: document.querySelector("#status").value
    }
    console.log('Event Data', eventData)
    var newEvent = new Event(eventData)
    Buckstream.addEvent(newEvent);
    view.render();
    newEvent.save();

  }


};
