// create and handle an promise
// an promise is an object representing a eventual completion or failure of an async ops
// a promise has 3 states ==> pending , fullfiled , rejected 
// if fullfiled the .then() is executed in which we pass our call back 
// helps us to overcome callBack hell as well as inversion of control problem 

const cart = ["shirt", "pant", "kurta"];

createOrder(cart)
  .then((orderId) => {
    console.log("valid Cart Items");
    return proceedToPayment(orderId);
  })
  .catch((err)=>{
    console.log(err);
  })
  .then((orderId) => {
    console.log(orderId)
    console.log("Payment Successfull - show order summary");
    return showOrderSummary(orderId);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err)=>{
    console.log(err)
  })

function proceedToPayment(orderId) {
  const pr = new Promise(function (resolve, reject) {
    if (orderId === 12345) {
      resolve(orderId);
    } else {
      const err = new Error("Inavlid Order Id");
      reject(err);
    }
  });
  return pr;
}

function showOrderSummary(orderId) {
  const pr = new Promise((resolve, reject) => {
    if (orderId === 12345) {
      resolve(cart);
    } else {
      const err = new Error("No Order summary found");
      reject(err);
    }
  });
  return pr;
}

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (validateCartItems(cart)) {
      const orderId = 12345;
      resolve(orderId);
    } else {
      const err = new Error("Invalid cart Items");
      reject(err);
    }
  });
  return pr;
}

function validateCartItems(cart) {
  return true;
}


//we make sure of synchronous programming using this method (promises)
// we attach the data of a asycn op into the promiseResult and return a promise 
// which will be collected by .then() of next async 



