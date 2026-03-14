require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(express.json());
app.use(cors("*"));

const person4 = {
  firstName: "Kamal",
  lastName: "Kaninki ",
  age: 19,
  sayNew: () => console.log("what is lekan saying ?"),
  oknay: function () {
    console.log("i will soon slap him now!!!!!!!!!!!");
  },
};

person4.sayNew();
person4.oknay();
console.log(person4.firstName);
console.log(person4.lastName);

const array = [
  { schollar: "matheew", clases: "ss1", age: 20 },
  { schollar: "Dolapo", clases: "ss8", age: 25 },
  { schollar: "mathsni", clases: "ss6", age: 24 },
  { schollar: "David", clases: "ss2", age: 27 },
  { schollar: "tityus", clases: "ss4", age: 29 },
];

console.log(array.push({ schollar: "tityus", clases: "ss4", age: 29 }));
const newArry = array.map((array) => array.clases);
const newClasses = array.map((array) => array.schollar);
const newAge = array.filter((array) => array.age > 20);

console.log(newArry);
console.log(newClasses);
console.log(newAge);

function wakeup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" You should be awake by now");
    }, 3000);
  });
}

function brush() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Go and brush your smelling teeth!.");
    }, 13500);
  });
}

function bathroom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Don't forget to take your bath");
    }, 4500);
  });
}
function breakfast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Take your breakfast from the microwave!!");
    }, 6000);
  });
}

wakeup()
  .then((value) => {
    console.log(value);
    return brush();
  })
  .then((value) => {
    console.log(value);
    return bathroom();
  })
  .then((value) => {
    console.log(value);
    return breakfast();
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
