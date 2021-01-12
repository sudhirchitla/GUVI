//  Problem 1 : Parsing an JSON object’s Values

var obj = {name : "RajiniKanth", age : 33, hasPets : false};


function printAllValues(obj) {
 // your code here
 console.log(Object.values(obj));
}
printAllValues(obj);


//  Problem 2 : Parsing an JSON object’s Keys

function printAllKeys(obj) {
 // your code here
 console.log(Object.keys(obj));
}
printAllKeys(obj);


//  Problem 3 : Parsing an JSON object and convert it to a list

var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
 // your code here
  console.log(Object.entries(obj));
}
convertListToObject(obj);


//  Problem 4 : Parsing a list and transform the first and last elements of it

var arr = ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr) {
 var newObject = {};
 newObject[arr[0]] = arr[arr.length - 1]; 
 //newObject.arr[0] = arr[arr.length - 1]; 
 return newObject;
}

var newobj = transformFirstAndLast(arr);
console.log(newobj);


// Problem 5 : Parsing a list of lists and convert into a JSON object

var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(arr) {
 var newObject = {};
 
 // arr.forEach(element => newObject[arr[0][0]] = arr[0][1]);
 for (let i=0; i <arr.length; i++){
     newObject[arr[i][0]] = arr[i][1];
 }
 
 return newObject;
}

var output = fromListToObject(arr);
console.log(output);


