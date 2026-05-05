// forceful type assertion
let x: any = "232";
let len:number= (x as string).length;
// in the above example, we have a variable x of type any which is assigned a string value. 
// We are using type assertion to tell the compiler that x is of type string and then we are accessing the length property of the string. 
// This is an example of forceful type assertion because we are telling the compiler to treat x as a string even though it is of type any.


// an example:
type book={
    name: string;   
};
let bookstring='{"name": "typescript"}';
let bookobj= JSON.parse(bookstring) as book;
console.log(bookobj);
// in the above example, we have a string bookstring which is a JSON string representing a book object. 
// We are using JSON.parse to parse the string and then we are using type assertion to tell the compiler that the result of JSON.parse is of type book. 
// This is an example of forceful type assertion because we are telling the compiler to treat the result of JSON.parse as a book object even though it is of type any.




//try-catch block
try {
    //code
} catch (error) {
    if (error instanceof Error){
        console.log(error.message);
    }
    console.log("An error occurred:", error);
}// in the above example, we have a try-catch block where we are catching any errors that occur in the try block. 
// We are using the instanceof operator to check if the error is an instance of the Error class, and if it is, we are logging the error message. 
// If it is not an instance of the Error class, we are logging a generic error message along with the error object.



//an example:
const data: unknown = "value";
const str: string = data as string;//in this example, although data is of type unknown, simply writing const str: string=data will result in TS throwing an error
//thus we need to assert that assume data is string. really helps when working with env variables




//NEVER TYPE
type Role="admin" | "user";
function redirectURL(role: Role): void{
    if (role === "admin"){
        console.log(" redirect to admin dash");
        return;
    }
    else if (role === "user"){
        console.log("redirect to user dash");
        return;
    }
    role;// here the type of role gets assigned as never since we have already handled all the edge cases of role previously

}