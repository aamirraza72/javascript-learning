//  Immediately Invoked Function Expressions (IIFE)

//to remove global scope pollution we use iife

(function any(){

    console.log(`DB Connected`);
    
} ) (); 
//use semicolon in two consecutive iife

( (name)  => {
    console.log(`DB Connected Two ${name}`);
    
})  ('alex');



// (function any(){
//     console.log(`DB Connected Two`);
    
// } ) ()

