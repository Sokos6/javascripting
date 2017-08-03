

function getValue(condition) {
	if(condition) {
		var value = "blue";
		//other code
	} else {
		//value exists here as undefined
		return null;
	}

//value exists here as undefined 
}

//behind the scenes, js engine changes the function to look like this

function getValue(condition) {
	var value;
	if...//etc etc 
}

