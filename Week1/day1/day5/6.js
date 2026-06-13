// object data type

// non-primitive data type/reference data type
// collection of key value pair
// mutable
// {}
// dynamic in size/length
//key -> sstring ,value -> any data type
//key ->unique,value-> can be duplicate
 
//CURD

//1. create
let obj = {};
obj={
    id:15,
    name:"HARSH SAINI",
    hobbies:["coding","gaming","cooking"],
    status:false,
    address:{
        city:"delhi",
        state:"delhi",
        country:"india"
    },
};

//2. read
console.log(obj,typeof obj);

//bracket notation example,object name[key]
//dot notation example,object name.key

// 3. update
obj["status"]=true;
obj.name="harsh saini";
// create new key value pair in object
obj.email="h@gmail.com";
console.log(obj);

//4. delete
delete obj.id;
delete obj["email"];
console.log(obj);
