/*
let one = [11, 12];
let two = [21, 22];
let spreadObj = [51, ...one, 52, ...two];

//let spreadObj = [51, one, 52, two];

console.log(spreadObj);
console.log(spreadObj.length);

*/

/*

let spreadObj = [..."music"];
console.log(spreadObj);
*/

/*
const values = [10, 20, 30];
get(...values);
function get(one, two, three){
    console.log( one + two + three);
}
*/

/*
let get = (one) => {
   console.log(one);
}
get(...[1, 2, 3];
*/

/*
let get = (...rest) => {
   console.log(rest);
   console.log(Array.isArray(rest));
}
get(...[1, 2, 3];
*/

/*
let get = (one, ...rest) => {
    console.log(one);
    console.log(rest);
}
get(...[1,2,3]);
*/

/*
let get = (one, ...rest) => {
    console.log(one);
    console.log(rest);
}
get(1,2,3,4,5);
*/


let values = {0: "zero", 1: "one", 2:"two", length: 3};
for (var key in values){
    console.log(key, ':' , values[key]);
}

for(var k=0; k<values.length; k++){
    console.log(values[k]);
}
