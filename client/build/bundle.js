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

	var Event = __webpack_require__(1);
	var Status = __webpack_require__(2);
	var Stream = __webpack_require__(3);
	var View = __webpack_require__(4);
	
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


/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports) {



/***/ },
/* 4 */
/***/ function(module, exports) {

	var View = function(stream){
		this.stream = stream;
	}
	
	View.prototype = {
		render: function(){
		
			var eventList = document.getElementById('event-list');
	
			this.populateEventList(eventList)
		},
	
	
		createItemForEvent:function(event){
			var eventListItem = document.createElement('li');
			eventListItem.innerText = event.title + event.status;
			return eventListItem;
		},
	
		populateEventList: function(listElement, events){
			for (event of events){
				listElement.appendChild(this.createItemForEvent(event));
			}
		}
	
	
	}
	
	
	
	
	
	
	
	module.exports = View;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map