// an promise is an object representing a eventual completion or failure of an async ops
// a promise has 3 states ==> pending , fullfiled , rejected 
// if fullfiled the .then() is executed in which we pass our call back 
// helps us to overcome callBack hell as well as inversion of control problem 

const promise=fetch("https://api.github.com/users/progaurav052");
console.log(promise.response); // this return us an promise 
promise.then((response)=>{
   return response.json();
})
.then((data)=>{
    console.log(data);
})