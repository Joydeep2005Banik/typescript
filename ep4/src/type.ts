let food ='pizza';//TS automatically infers that food is of type string

// food = 123;//this will give an error because food is of type string and we are trying to assign a number to it

let age=Math.random() > 0 ? 22:'yes'; //here TS infers that age can be both an integer as well as a string

// THIS IS CALLED TYPE INFERENCING

let x='hello'; // here TS infers that type is string
let y:string='bye'; // here we are explicitly telling TS that y is of type string

// THIS IS CALLED TYPE ANNOTATION