//OBJECTS IN TYPESCRIPT
//object is a collection of key value pairs
//object can be defined using interface or type or const too.

//example:
const book={
    name: "The Alchemist",
    price: 120,
    isAvailable: true
}
//{
  //  name: string;
    //price: number;
    //isAvailable: boolean;
//}
//behind the scenes, TypeScript infers the type of the book object as an object with three properties: name, price, and isAvailable.


//an implementation example:
let person:
{
    name: string;
    age: number;
    isEnrolled: boolean;
}
person={
    name: "Joydeep",
    age: 20,
    isEnrolled: true
}// this is an example of defining an object type inline. 
// We have then assigned a value to the person variable that satisfies the requirements of the object type.



//OBJECT ALLIASES
// we can also define an object type using an alias.
//example:
type food={
    name: string;
    price: number;
    ingredients: string[];
}
let pizza: food={
    name: "Margherita",
    price: 250,
    ingredients: ["tomato", "cheese", "basil"]
}// in the above example, we have defined a type alias food that describes the structure of a food object. 
// We have then defined a variable pizza of type food and assigned it a value that satisfies the requirements of the food type.




// DUCKTYPING

// if it looks like a duck and quacks like a duck, then it must be a duck.

// Duck typing is a concept in programming where the type of an object is determined by its behavior rather than its explicit declaration. 
// In TypeScript, this means that if an object has the required properties and methods, it can be considered to be of a certain type, 
// even if it does not explicitly implement that type.

//example:
type usr_response={ok: boolean};
let success_response: usr_response={ok: true};
let error_response: usr_response={ok: false, message: "generic error message"}
success_response=error_response;
// the above snippet will be valid because the bare minimum requirement for usr_response if there should be a property of with boolean value
//once that is satisfied, it will not check afterwards and also will accept new properties as well.
// this is ducktyping
// note: IDE might show a warning for additional property but it will not be an error.
//for example, the  warning for property message is "Object literal may only specify known properties, and 'message' does not exist in type 'usr_response'."




// PARTIAL IN TYPESCRIPT
// Partial is a utility type in TypeScript that allows you to create a new type by making all properties of an existing type optional. 
// This can be useful when you want to create a new type that is based on an existing type but with some properties that are not required.

//example:
type book={
    name: string;
    price: number;
    isAvailable: boolean;
}
const updateBook=(updates: Partial<book>)=>{
    console.log("updating book with the following updates:", updates);
}
updateBook({price: 150});// in the above example, we have defined a type alias book that describes the structure of a book object. 
// We have then defined a function updateBook that takes an argument of type Partial<book>. 
// This means that the updates argument can have any subset of the properties of the book type, and all of those properties will be optional. 
// In this case, we have called the updateBook function with an object that only has the price property, which is valid because it satisfies the requirements of the Partial<book> type.
// partial can also pass empty object as well that can cause issue

// an example where partial can pass empty object:
type user={
    name?: string;
    age?: number;
    isEnrolled?: boolean;// the ? makes the properties optional
}
const updateUser=(updates: Required<user>)=>{
    console.log("updating user with the following updates:", updates);
}//here it will cause an issue since the properties of type user are optional but the method updateUser requires all properties




// PICK IN TYPESCRIPT
// Pick is a utility type in TypeScript that allows you to create a new type by picking a subset of properties from an existing type. 
// This can be useful when you want to create a new type that only includes certain properties from an existing type.

//example:
type product={
    name: string;
    price: number;
    isAvailable: boolean;
}
type product_name_and_price= Pick<product, "name" | "price">;
//here i can specifially pick which properties i want to include




// Omit IN TYPESCRIPT
// Omit is a utility type in TypeScript that allows you to create a new type by omitting a subset of properties from an existing type. 
// This can be useful when you want to create a new type that excludes certain properties from an existing type.

//example:
type employee={
    name: string;
    age: number;
    isEnrolled: boolean;
}
type employee_without_isEnrolled= Omit<employee, "isEnrolled">;
// here i can specifically omit which properties i want to exclude

