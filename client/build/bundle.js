/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Buckstream = __webpack_require__(5);
	var Event = __webpack_require__(2);
	var Status = __webpack_require__(3);
	var View = __webpack_require__(4);
	
	window.onload = function(){
		var Buckstream = new Buckstream();
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


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	function Event(title, status){
	
		this.title = title;
		this.status = status;
		
	}
	
	Event.prototype = {
		save: function(){
	    var url = 'http://localhost:3000/accounts';
	    var request = new XMLHttpRequest();
	    request.open("POST", url);
	    request.setRequestHeader("Content-Type", "application/json");
	    request.onload = function(){
	      if(request.status === 200){
	      }
	    }
	    request.send(JSON.stringify(this));
	  },
	
	
		getTitle: function(){
			return this.title;
		},
	
		getStatus: function(){
			return this.status;
		}
	}
	
	
	
	
	
	module.exports = Event;

/***/ },
/* 3 */
/***/ function(module, exports) {

	function Status(name, colour, resolved){
	
		this.name = name;
		this.colour = colour;
		this.resolved = resolved;
	
	}
	
	
	Status.prototype = {
		getName: function(){
			return this.name;
		},
	
		getColour: function(){
			return this.colour;
		},
	
		getResolved: function(){
			return this.resolved;
		}
	
	
	}
	
	
	
	
	module.exports = Status;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var View = function(buckstream){
		this.buckstream = buckstream;
	}
	
	View.prototype = {
		
		render: function(){
		
			var eventList = document.getElementById('event-list');
	
			this.populateEventList(eventList, this.buckstream.events)
		},
	
	
		createItemForEvent:function(event){
			var eventListItem = document.createElement('li');
			eventListItem.innerText = event.title + event.status;
			return eventListItem;
		},
	
		populateEventList: function(listElement, events){
			for(event of events){
				listElement.appendChild(this.createItemForEvent(event));
			}
		}
	
	
	}
	
	
	
	
	
	
	
	module.exports = View;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Event = __webpack_require__(2);
	
	function Buckstream(){
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map