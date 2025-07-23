const users = [
  { firstName: "gaurav", lastname: "Pai", age: 22 },
  { firstName: "Dipti", lastname: "Panda", age: 38 },
  { firstName: "Sumit", lastname: "kumar", age: 34 },
  { firstName: "Pratyush", lastname: "Dutta", age: 52 },
];
// using an filter function get users who age is greater than 35
// using an reduce functionn get sum of all ages

/*const getMaxAge = function (user) {
  return user.age > 35;
};
const getagesum = users.reduce(function (acc, curr) {
  acc = acc + curr.age;
  return acc;
}, 0);
console.log(users.filter(getMaxAge));
console.log(getagesum);
*/
// [gaurav,sumit]
const misc=users.reduce(function(acc,curr){
    if(curr.age<35)
    {
        acc.push(curr.firstName);
    }
    return acc;
},[]);

console.log(misc);

//achiever the above thing using map and filter 

const output= users.filter(user=>user.age<35).map(user=>user.firstName);
console.log(output);