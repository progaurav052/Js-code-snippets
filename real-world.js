// using github api get an user-profile
// use fetch method to get the api result
// solve and compare using both promise.then() and async-await

/*const getProfile1 = async function () {
  console.log("Welcome to github user API fetch result");
  const p = fetch("https://api.github.com/users/akshaymarch7"); // will return an promise , with response-object attached to promiseResult
  p.then((res) => {
    console.log(res);
    return res.json(); // this will again return an promise;
  }).then((data) => {
    console.log(data);
  });
  console.log("Bye");
};

getProfile1();*/


const getProfile2 = async function () {
    console.log("Welcome to github user API fetch result");
    const p = await fetch("https://api.github.com/users/akshaymarch7"); // will return an promise , with response-object attached to promiseResult
   // will take the response object from PromiseResult and assign it to p
    const data =await p.json();
    console.log(data);
    console.log("Bye");
  };
  
  getProfile2();