console.log("Welcome!");

const name = "Erno";
const favoriteAnimal = "Rabbit";

console.log("My name is " + name + " and my favorite animal is the " + favoriteAnimal + ".");

console.log(name);
console.log(favoriteAnimal);

const visitorName = prompt("What is your name?");

console.log("Hello " + visitorName + ". Welcome to JavaScript.");

const visitorFavoriteAnimal = prompt("What is your favorite animal?");

console.log("Your favorite animal seems to be the " + visitorFavoriteAnimal + ".");

// let age = 22;
const age = prompt("What is your age?");
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

function greetUser(name) { console.log("Hello " + name + "!"); }

greetUser(visitorName);

function showMessage() {
    alert("Here is another prompt for you!");
}
