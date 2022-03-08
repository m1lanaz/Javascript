//Local:

// code here can NOT use y
function myFunction() {
    var y = 0;
};



//Global:

var x = 6;
// code here can use x

function myFunction() {
    // code here can also use x
};



// if you assign a value to a variable that has not been declared, it will automatically become a global variable

randomFunction();

// code here can use m

function randomFunction() {
     m = 3;
};