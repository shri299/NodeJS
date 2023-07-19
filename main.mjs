//1st way

// const add = (a,b) =>{
//     return a+b;
// };

// export default add;

//2nd way

// export default (a,b) =>{
//     return a+b;
// };

//3rd way : importing multiple functions

const add = (a,b) => {
    return a+b;
};

const subtract = (a,b) => {
    return a-b;
};

export default {
    add,
    subtract
}