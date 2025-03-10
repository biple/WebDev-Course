console.log("Hey this is the video 55 of sigma web dev course.");

let a = 5;
let b = 6;
let c = "Harry";
//var 55a = 5; // Cannot start a variable name with a number
//var a55 = 5; // This is correct

// console.log("The value of a + b is", a + b);

{
    let a = 45;
    console.log(a);
}

//If var was used the value of a would've been 45 as var is function scoped and let is block scoped.

console.log(a);

console.log(typeof a);
console.log(typeof c);

const a1 = 45;

let x = "Harry bhai";
let y = 345;
let z = 3.55;
const p = true;
let q = null;
let r = undefined;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
    "name": "Harry",
    "job code": 5600,
    "address": "Mars",
    "is_handsome": true
}

console.log(o);
o.salary = 5000;
console.log(o);
o.salary = 6000;
console.log(o);