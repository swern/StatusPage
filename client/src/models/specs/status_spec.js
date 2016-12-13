var Status = require('../status');
var assert = require('assert');


describe('Status', function(){
    it('should have a name', function(){
    	var status1 = new Status('status1','Red','No');
     	assert.equal("status1", status1.getName());
    });

    it('should have a colour', function(){
    	var status2 = new Status('status1','Red','No');
     	assert.equal("Red", status2.getColour());
    });

    it('should have a resolved', function(){
    	var status3 = new Status('status1','Red','No');
     	assert.equal("No", status3.getResolved());
    });
  });