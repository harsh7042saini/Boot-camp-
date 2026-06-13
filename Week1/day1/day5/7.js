//loop in objects
let obj = {
    name:"harsh",
    age:25,
    stauts:true,
}

// for in loop
for(let key in obj){
    console.log(key,typeof key);
    // console.log(obj.key); //undefined
    console.log(obj[key]);
}