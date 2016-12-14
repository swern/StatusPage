// var View = function(buckstream){
// 	this.buckstream = buckstream;
// }

// View.prototype = {
	
// 	render: function(){
	
// 		var eventList = document.getElementById('event-list');

// 		this.populateEventList(eventList, this.buckstream.events)
// 	},


// 	createItemForEvent:function(event){
// 		var eventListItem = document.createElement('li');
// 		eventListItem.innerText = event.title + event.status;
// 		return eventListItem;
// 	},

// 	populateEventList: function(listElement, events){
// 		for(event of events){
// 			listElement.appendChild(this.createItemForEvent(event));
// 		}
// 	}


// }







// module.exports = View;