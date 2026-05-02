

// ts code ---> lexer ---> parser ---> binder -----> type checker ----> emitter ---> .js, .ds.ts, .map (output files)

// lexer= tokenizes the ts code into tokens. example of tokens: function, const, let etc

//parser= takes the tokens and creates an abstract syntax tree (AST) which represents the structure of the code

//binder= takes the AST and creates a symbol table which contains information about the variables, functions, classes etc used in the code
// also creates parent pointer for each node in the AST which points to its parent node.
//eg of a parent pointer: node1 ----->node2
//                          |
//                          ---------> node3 
// lets say there is a pointer 'x' in node3. this pointer points node3 to node1. this is a parent pointer.
//binder also makes flow nodes.
// eg of flow node: function hello(name:string):string{
//                  {   
//                      //check if name is of type string
//                      if(typeof name === "string"){     // this is a flow node
//                          return `hello ${name}`;
//                      }
//                  }


//type checker= takes the symbol table and checks for type errors in the code. it also checks for other errors like syntax errors, semantic errors etc
// type checker also includes something called short circuititng
// short circuiting: if there is an error in the code, the type checker will stop checking further and will report the error. this is done to improve performance.
// type checker checks your entire code 2 times and thus may take some time to compile


//emitter= basically what it does is : typescript - addons --> js. also we get some more output files like declartation files (.d.ts) 
// and map files (.map) which are used for debugging. the emitter takes the AST and the symbol table and generates the output files. 
// it also does some optimizations like tree shaking, dead code elimination etc to reduce the size of the output files.