require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(express.json());
app.use(cors("*"));

const person4 = {
  firstName: "Kamal ",
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
 
console.log(array.push({ schollar: "tityus", clases: "ss4", age: 29 }));
console.log(array[4].age)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
