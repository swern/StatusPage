var status = require('../status');

var Event = function(title, status, content, schedule, lastUpdated, comments){

	this.title = title;
	this.status = status;
	this.content = content;
	this.schedule = schedule;
	this.lastUpdated = lastUpdated;
	this.comments = comments;

}











module.exports = Event;