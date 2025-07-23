// refer the code of examples.js , and HOF 
// passing function as an argument to another function
// all this is possible by first-class functions 
// HOF ==> passing function as argument to another function 
// or return a function from another function 


const cart =["pant","shirt","shoes"];

/*
createOrder(cart,function(){
    proceedToPayment(orderId,function(){
        showOrderSummary(function(){
            showDetails(function(){
                ...
                ...
            });
        });
    });
});
Problem 1:

// we are passing the logic as second parameter (callback)function(){}
// this will create an pyramid of doom;
// also called as an callback hell;

Problem 2:

// we have passed the logic/callback to the function ...
// now this is upto that parent function when it wants to execute it or if there is some error it may not execute it 
// this is called inversion of control problem 


*/




