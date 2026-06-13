// Logival operations and &&, or ||, not !

// Not operators

// // console.log(!"1");
// // console.log(!!0);
// // console.log(!1);
// // console.log(!undefined);

// // // and operator

// // console.log("ram" && "shyam" && 0.5 && "" && "mukesh");

// // console.log("" && "shyam" && false && "mukesh");

// // console.log("ram" && "shyam" && 0.5 && false && "hello" && "mukesh")



// // END OPERATOR always search for falsy value and if it does not found any falsy value then it give last value as a result.


// // or operator


// // console.log("ram" || "shyam" || 0.5 || "" || "mukesh");

// // console.log("" || "shyam" || false || "mukesh");

// // console.log("ram" || "shyam" || 0.5 || false || "hello" || "mukesh")


// console.log(101 && 6>10 && (1+1) && false && "hello"); //
// console.log(0 && 6>10 && (1+1)==2 && true && "hello"); //
// console.log("null" && "" && 0 && false && "hello"); //
// console.log(undefined && "false" && false); //

// console.log("ram" || " " || "shyam"); //
// console.log(101 || 6>10 || (1+1) || false || "hello"); //
// console.log(0 || 6>10 || (1+1)==2 || true || "hello"); //
// console.log("null" || "" || 0 || false || "hello"); //

// console.log("kuchh bhi " && 101>98 || undefined && "null" || !!!"" && 0); // true

// console.log(true+1 || false && 0<0 && !"null" && "Hello"=="Hello" || true); // 2


console.log("kuchh bhi " && 101>98 || undefined && "null" || !!"");
console.log(true+1 ||false && 0<0 && !"null" && "Hello"=="Hello");
console.log("ram"||"shaym" && !undefined || !!!true && "false");
console.log(!!!0 && "" && isNaN(NaN) && 5>=5.5 || 101);
console.log("hello" && false || !!!123 && undefined || "false");
console.log(0 && !!false && !!!"" && "hero" || 0);
console.log("hello" && "2"+1==3 || 0.0 && undefined || "error");