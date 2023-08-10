//The setTimeout() function executes a particular block of code after cetain time has elasped

//it takes functions, time(ms), any params needed to be passed in function

function greet() {
    console.log("Hello");
}

function greett(name) {
    console.log(`Hello ${name}`);
}

//const res = setTimeout(greett,2000,'Srishti');
//clearTimeout(res); //will make sure that the greet function will not run after 2000 ms


//the setInterval function runs the same code repeatedly in regular intervals
//it takes functions, time(ms), any params needed to be passed in function
//clearInterval clears the interval

setInterval(greet,2000);//


//Important points

//timeouts and intervals are not part of java script, they are present in browser and node, js just lets as use it.
//the dureation specified is the minimum delay and not the gaurenteed delay.
//