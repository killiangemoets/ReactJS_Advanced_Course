// Primitives : number, strings, boolean
let age: number;
age = 12;
// age = "hey";

let userName: string | string[];
userName = "Kiki";

let done: boolean;
done = false;

let work: null;
work = null;

// More complex types: array, objects
let hobbies: string[];
hobbies = ["Sports", "Travelling"];

let person: any;
person = {
  name: "Kiki",
  age: 32,
};

person = {
  isEmplpoyee: true,
};

let person2: {
  name: string;
  age: number;
};

person2 = {
  name: "Kiki",
  age: 32,
  //   isEmplpoyee: true,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference

// let course = "React";
let course: string | number = "React";

// course = 1234;
course = "Hey";

// Function types, parameters
