var Status = require('../status');
var assert = require('assert');


describe('Status', function(){
    it('should have a name', function(){
    	var status1 = new Status('status1','Red','No');
     	assert.equal("status1", status1.getName());
    });
  });