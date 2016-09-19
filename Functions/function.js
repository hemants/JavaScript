/*
Function are objects which can be invoked.
All functions are linked to Function.prototype (and this itself is linked to Object.prototype)
Function is a first class citizen in JS i.e. it can be passed as argument, stored and returned to variable.

A function always returns a value. If the return value is not specified, then undefined is returned.
If the function was invoked with the new prefix and the return value is not an object, then this (the new
object) is returned instead.
*/

//Function literal
var add = function(a,b){
	return a+b;
};
console.log(add(1,2));

// Function is basically an Object, so it can have functions as well.
var additon = function(a,b){
	return {
		value : a+b,
		print : function(){ console.log(a+b);} 
	};
};

console.log(additon(1,2).value);
additon(2,3).print();
