alert("Hello World");

console.log("Code is running...");

var a = prompt("Enter a number");
var isTrue = confirm("Are you sure you want to leave the page and burn your computer?");

if (isTrue){
    console.log("The computer is burning...");
}

else{
    console.log("The computer is not burning...");
}

console.log("The number is: " + a);

document.title = "New Title";

document.body.style.backgroundColor = "lightblue";