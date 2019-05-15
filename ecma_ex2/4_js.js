/*
let item = {
  ["one" + "two"]: 12
};
console.log(item.onetwo);
*/

/*
let item = "tennis";
let sports = {
    [item] : 1,
    [item + "Game"] : "윔블던",
    [item + "Method"](){
        return this[item];
    }
};
console.log(sports.tennis);
console.log(sports.tennisGame);
console.log(sports.tennisMethod());
*/
/*
let [one, two, five= 5] = [1, 2];
console.log(five);

[one, two, five =5] = [1, 2, 77];
console.log(five);

let {six, seven = 7} = {six : 6};
console.log(six, seven);
*/
/*

let plus = (one, two = 2) => one + two;
console.log(plus(1));
console.log(plus(1, undefined));
console.log(plus(1, 70));
*/

/*

let a = [10,20,30];
for(var value in [10, 20, 30]){
    console.log(value);
    console.log(a[value]);
}  

for(var value of [10, 20, 30]){
    console.log(value);
}

for(var value of "abc"){
    console.log(value);
}

*/

/*
let nodes = document.querySelectorAll("li"); 
for (var node of nodes){
    console.log(node.textContent);
}*/
/*
let values = [10, 20, 30];
Array.prototype.music = function(){
    return "음악";
}
Object.prototype.sports = function(){
    return "스포츠";
}

for(var key in values){
    console.log(key, values[key]);
}

console.log("<<<for-of>>>");
for(var value of values){
    console.log(value);
}
*/

console.log(3**2);
console.log(3**3);
console.log(Math.pow(3,3));