//A function can be passed ad an argument in another function
//a function can be returned from another function as a value

function greet(greetSushi) {
  console.log(`Hello ${name}`);
}

function greetSushi(greetFn) {
    name = "Sushi";
    greetFn(name);
}

greetSushi(greet);

//greet ---> callback function(argunment)
//greetSushi ----> higher order function(function which accepts that argument)

//synchronous callback ---> A callback which is executed immediately 
//async callback --> use to delay the execution until a certain time or event has occurred

 