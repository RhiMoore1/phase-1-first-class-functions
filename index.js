 
 
 // takes a callback as an argument
 // call the callback function
 function receivesAFunction(cb) {
    return cb();
}
receivesAFunction(function () {return 'I am a callback function'});



// take no arguments
// return a named function
function returnsANamedFunction() {
    function namedFunction() {
       console.log('hello');
    }
    return namedFunction;
}
returnsANamedFunction();


// takes no arguments
// returns an anonymous function
function returnsAnAnonymousFunction() {
    return (function() {
        console.log('hello');  // anonymous function
    });
}
returnsAnAnonymousFunction();


// takes no arguments
// returns an anonymous function using arrow function

/*
function returnsAnAnonymousFunction() {
    return (() => {
        console.log('hi');
    });
}
returnsAnAnonymousFunction();
*/


