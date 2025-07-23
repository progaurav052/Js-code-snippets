/*const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise P resolved ");
  }, 10000);
});

const handlePromise = function () {
  console.log("Welcome to namaste JS");
  p.then((data) => {
    console.log(data); // callback
  });
  console.log("Bye namaste js");
};
handlePromise();
---output------------
Welcome to namaste JS
Bye namaste js
Promise P resolved  */

const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Promise P1 resolved ");
    }, 10000);
  });

async function handlePromise(){
    console.log("Welcome to namaste JS");
    const data = await p1;
    console.log(data);
    console.log("Bye namaste js");


}  
handlePromise();
// as soon as handle promise is called js engine registers the promises to be resolved and starts the timer 
// when it comes to the line which has promise resolve code , handlePromise is suspended from the call-stack and promise is resolved 
// once we get it resolved , handlepromise() comes to call stack again 