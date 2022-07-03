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

// Type Alias
type Animal = {
  name: string;
  age: number;
};
let animal: Animal;
let animals: Animal[];

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

// Can also do that (but not useful here):
function add2(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3];

updatedArray[0].split(""); //Aucune erreur ne s'affiche car on a définit de type any, mais nous avons passez des numbers donc split de fonctionnera pas

// TO SOLVE IT: We define a generic type.
// Typically we call it T for type
function insertAtBeginning2<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray2 = [1, 2, 3];
const updatedArray2 = insertAtBeginning2(demoArray2, -1); // [-1, 1, 2, 3];
const updatedArray3 = insertAtBeginning2(["b", "c", "d"], "a"); // [-1, 1, 2, 3];

// Now, typescript comprend que le type de array et le type de value doivent être les mêmes
// Et dès lors, typescript comprend que logiquement, le tableau qui sera construit sera aussi du même type
// updatedArray2[0].split(""); //Maintenant une erreur s'affiche
updatedArray3[0].split("");
