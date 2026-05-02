//typescript=js+addons

//ts code ---> gets processed by compiler ---> js code. this js code is the actual one that runs

//ts provvides typechecking (datatype checking) and other features like interfaces, classes, etc which 
// are not present in js. it also provides better tooling and error checking during development. 

// ts code is more maintainable and scalable than js code. ts is a superset of js, which means that any valid js code is also valid ts code. 

// ts can be used for both frontend and backend development. ts is widely used in large scale projects and enterprise applications. 



//install node.js to run typescript code in terminal



//syntax for function
// function function_name(param:datatype_of_param):return_datatype_of_funtion

function hello(name:string):string
{
    return `hello ${name}`;//${variable_name} is used to print the value of variable in string
}
console.log(hello("joydeep"));//console.log is used to print the output in console....kinda like print statemennt or main function in python
console.log(hello("typescript"));



