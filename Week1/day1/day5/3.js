//array data type
//array is a collection of data
//array is a data structure that can hold more than one value at a time
//array is a list of values
//array is a collection of items stored at contiguous memory locations 
//mutable -> inbuilt fn that is used to change the value of an array
// 
// var arr = [1,true,"hello",null,undefined,{name:"john"},[1,2,3]];
// console.log(arr);
// arr.push("world");
// console.log(arr);

//1. create

var arr =[]
arr =[1,2,3];

//2. read
console.log(arr,typeof arr);

// read specific position/index value
console.log(arr[1]);

// 3. update
// add RHS/ending [push]
arr.push(10);

console.log(arr);

// add LHS/starting [unshift]
arr.unshift(100);

console.log(arr);

arr[2]=20;
console.log(arr);

// 4. delete

//RHs pop()
arr.pop();
console.log(arr);


//LHS shift()
arr.shift();
console.log(arr); 