var x = 4;
if (x > 5){
    console.log("x is more than 5!");
} else{
    console.log("x is less than 5!");
};

var age = 4;
if (age >= 18){
    console.log("You are an adult!");
} else if (age >= 13){
    console.log("You are a teenager!");
} else{
    console.log("You are a child!");
};

// switch performs different actions based on different conditions

switch(age){
    case 1:
        console.log("you are 1");
        break;
    case 2:
        console.log("you are 2");
        break;
    case 3:
        console.log("you are 3");
        break;
    case 4: // compares whats in brackets (switch(----)) 
        console.log("you are 4");
        break;
};