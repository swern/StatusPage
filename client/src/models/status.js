function Status(name, colour, resolved){

	this.name = name;
	this.colour = colour;
	this.resolved = resolved;

}


Status.prototype = {
	getName: function(){
		return this.name;
	}
}




module.exports = Status;