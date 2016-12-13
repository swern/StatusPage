var Event = require('./models/event.js');
var Status = require('./models/status.js');
var Stream = require('./models/stream.js');
var View = require('./view/view.js');

window.onload = function(){
  console.log("webpack app started");


  var form = document.querySelector("#add-event")
   form.onsubmit = function(e){
    e.preventDefault();
    var eventData = {
      title: document.querySelector("#title").value,
      status: document.querySelector("#status").value
    }
    console.log('test', test)
    var newEvent = new Event(eventData)
    Stream.addEvent(newEvent);
    View.render();
    newEvent.save();

  }


};
