// Interface in TypeScript

// An interface is a way to define the structure of an object. 
// It can be used to describe the shape of an object, including its properties and methods.

interface Person {
    name: string;
    age: number;
}
class Employee implements Person {
    name= "Joydeep";
    age = 20;
}// in the above example, we have defined an interface Person with two properties name and age. 
// We have also defined a class Employee that implements the Person interface. 
// This means that the Employee class must have the same properties and methods as the Person interface. 
// In this case, the Employee class has a name property of type string and an age property of type number, 
// which satisfies the requirements of the Person interface.


//another example:
interface shape{
    size: "small" | "large";
}
class circle implements shape{
    size: "small" | "large"= "small";
}// in the above example, we have defined an interface shape with a property size that can be either "small" or "large". 
// We have also defined a class circle that implements the shape interface. 
// This means that the circle class must have a size property that can be either "small" or "large". 
// In this case, the circle class has a size property that is initialized to "small", which satisfies the requirements of the shape interface.


type response={ok: true} | {ok: false};
class my_response implements response{
    ok=true;
}// here this will throw an error because the class my_response does not satisfy the requirements of the response type. it needs an interface
