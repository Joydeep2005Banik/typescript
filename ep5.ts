//UNION AND ANY CONCEPT


// UNION

//for example
let a: number | string; //here we explicitly mention that a can be either number or string
//thus let a: number | string = 4; or let a: number | string = "hello"; both are valid
//This is called UNION in typescript

// alternatively, we can also explicitly mention that a parameter can have certain values instead of a type. the value can be custom.
//for eg:
let b: "hello" | 33 | 'A'; //here we explicitly mention that b can only be either "hello" or 33 or 'A'
//thus let b: "hello" | 33 | 'A' = 4; is invalid but let b: "hello" | 33 | 'A' = "hello"; or let b: "hello" | 33 | 'A' = 33; or let b: "hello" | 33 | 'A' = 'A'; all are valid



// ANY

//for example
let c: any; //here we explicitly mention that c can be of any type
//thus let c: any = 4; or let c: any = "hello"; or let c: any = true; all are valid

//However, using any is generally discouraged in TypeScript as it defeats the purpose of type safety. 
// It is better to use specific types or unions to ensure that your code is more predictable and maintainable.

//so its better to write something like:
let c1: number | undefined; //here we explicitly mention that c1 can be either number or undefined