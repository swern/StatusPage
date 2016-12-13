var Event = require('../event');
var Status = require('../status');
var assert = require('assert');


describe('Event', function(){
    it('should have a title', function(){
    	var event1 = new Event('event1', 'critical');
     	assert.equal("event1", event1.getTitle());
    });
    it('should have a status', function(){
        var status4 = new Status('status4', 'blue', 'yes');
        var event2 = new Event('event1', status4);
        assert.equal(status4, event2.getStatus());
    });

   
  });