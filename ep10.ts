// FUNCTIONS IN TYPESCRIPT
// Functions in TypeScript are similar to functions in JavaScript, 
// but they have additional features that allow you to specify the types of the parameters and the return value. 
// This can help catch errors at compile time and make your code more robust.

//example:
function store(name: string, price: number)
{
    console.log(" here is your order")
}
store("netwroking book",200);
//this is a simple function that takes 2 params string and number, and logs a msg in console

// another exmaple:
function calc(a: number, b: number):number{
    return a+b;
}
calc(23,54);
// here it takes 2 params of number and we mention the return data type of the function -  in this case thats a number


// LOGGER FUNCTION IN TYPESCRIPT
function logger(message: string): void{
    console.log(message);
}
logger("this is a logger function");
// here the return type of the function is void which means that the function does not return any value.


// OPTIONAL PARAMETERS IN TYPESCRIPT
function hello(name?: string): void{
    console.log(`Hello, ${name || "world"}!`);
}//here the name param is optional i.e. the function can run without explicityly expecting a name param and return void

// DEFAULT PARAMETERS IN TYPESCRIPT
function greet(name: string = "world"): void{
    console.log(`Hello, ${name}!`);
}// here the name param has a default value of "world" which means that if the function is called without providing a name argument, 
// it will use the default value instead.



// COMPLEX FUNCTIONS IN TYPESCRIPT
function store(order:{
    name: string;
    price: number;
    type: 'food' | 'drink';
}): number {
    return 3
}