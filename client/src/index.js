var Buckstream = require('./models/buckstream.js');
var Event = require('./models/event.js');
var url = 'http://localhost:3000/test';

var createItemForEvent = function(event){
  var eventListItem = document.createElement('li');
  eventListItem.innerText = event.title + event.status;
    return eventListItem;
}

  var populateEventList = function(listElement, events){
    for(event of events){
      listElement.appendChild(createItemForEvent(event));
    }
  }

  var displayBuckstream = function(buckstream){

  var eventList = document.getElementById('event-list');
  populateEventList(eventList, buckstream.events)
}


window.onload = function(){
	var buckstream = new Buckstream();
	

var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function(){
    if(request.status === 200){
      console.log('got the data');
      console.log(request.responseText);
      var sampleEvents = JSON.parse(request.responseText)
      console.log(sampleEvents)
      for(event of sampleEvents){
        buckstream.addEvent(new Event(event));
      }
      console.log(buckstream)
      displayBuckstream(buckstream)
    }
  }
  request.send(null);



  console.log("webpack app started");


  var form = document.querySelector("#add-event")
   form.onsubmit = function(e){
    e.preventDefault();
    var event = {
      title: document.querySelector("#title").value,
      status: document.querySelector("#status").value
    }
    buckstream.addEvent(new Event(event));
    displayBuckstream(buckstream);

    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      if(request.status === 200){
      }
    }
    request.send(JSON.stringify(event));
  }
};





//     console.log('Event Data', eventData)
//     var newEvent = new Event(eventData)
//     Buckstream.addEvent(newEvent);
//     view.render();
//     newEvent.save();

//   }


// };
