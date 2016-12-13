var Event = require('../event');
var assert = require('assert');


describe('Event', function(){
    it('should have a title', function(){
    	var event1 = new Event('event1', 'critical');
     	assert.equal("event1", event1.getTitle());
    });
    it('should have a status', function(){
        var event2 = new Event('event1', 'critical');
        assert.equal("critical", event2.getStatus());
    });

   
  });