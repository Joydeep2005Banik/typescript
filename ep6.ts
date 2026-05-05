// Type narrowing in typescript

// Type narrowing is the process of refining the type of a variable based on certain conditions or checks. 
// It allows us to work with more specific types and access properties or methods that are only available for those types.

//example
function example(x: number | string)
{
    if (typeof x === "number") {
        return ` the number is ${x}`
    }
    return `the string is ${x}`
}
//In the above example, we have a function that takes a parameter x which can be either a number or a string.
// Inside the function, we check the type of x using the typeof operator. 
// If x is a number, we can safely access properties or methods that are specific to numbers. 
// If x is a string, we can access properties or methods that are specific to strings. 
// This process of refining the type of x based on the condition is called type narrowing.



// another example:
function example2(y?: number)
{
    if (typeof y==="number")
        return `the number is ${y}`
    return "y is of another datatype"
}
//In the above example, we have a function that takes an optional parameter y which can be either a number or undefined. 
// it is a exhaustive check

//another example of exhaustive cheeck:
function example3(z: "a" | "b" | "c" | number)
{
    if (z === "a") {
        return "z is a"
    }
    else if (z === "b") {
        return "z is b"
    }
    else if (z === "c") {
        return "z is c"
    }
    else {
        return `z is a number and its value is ${z}`
    }
}


// guard rails : typeof, in, instanceof
//example:
class Person
{
    func(){
        return "hello"
    }
}
class human
{
    func(){
        return "hi"
    }
}
function func(obj: Person | human) {
    if (obj instanceof Person)
        return obj.func();
    else 
        return obj.func();
}
// this above example is a demonstration of using the instanceof operator to narrow down the type of obj.



// in typescript, we can also make our custom types
type custom={
    type: "string"
    value: "number"
}// here we have created a custom type called custom which has two properties: type and value.
function example4(obj:any):obj is custom// the function takes in an object of any type and returns an object of type as explicitly mentioned in custom 
{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.value === "number"
    )
}// in return statement, we check if the object has the properties type and value with the correct types.
function example5(item: custom | boolean)
{
    if (example4(item)) {
        return `the type is ${item.type} and the value is ${item.value}`
    }
    return "item is of type boolean"
}// in the above example, we have a function example5 that takes an item which can be either of type custom or boolean. it is a guard check



//an interesting example:
type course={
    courseName: "typescript";
    courseid: "23";
}//in this example, we have created a custom type called course which has two custom types called courseName and courseid
type student={
    name: "joydeep";
    age: 20;
}//same as previous
//now interestingly we can do this:
type college=course | student;// here we have created a new type called college which is a union of course and student
//an application example:
function example6(item: college)
{
    switch (item.courseName) {
        case "typescript":
            return `the course id is ${item.courseName}`;
        default:
            return `the student name is ${item.name} and the age is ${item.age}`;
    }
}
console.log(example6({courseName: "typescript", courseid: "23"}));