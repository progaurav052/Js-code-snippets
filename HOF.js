// higher order function use and code
const radius = [1, 2, 3, 4];
/*const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
console.log(calculateArea(radius));

const calulateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
console.log(calulateCircumference(radius));

const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

console.log(calculateDiameter(radius));


[
  3.141592653589793,
  12.566370614359172,
  28.274333882308138,
  50.26548245743669
]
[
  6.283185307179586,
  12.566370614359172,
  18.84955592153876,
  25.132741228718345
]
[ 2, 4, 6, 8 ]

*/
// the above code is not good , we can write the above code in reusable way 
// using HIGHER order functions
//method 1
/*const calculate=function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++)
    {
        output.push(logic(radius[i]));
    }
    return output;
}
    */

// logic ==> calArea,calDiameter,calCircumference

const area=function(radii){
    return (Math.PI*radii*radii);
}
const diameter=function(radii){
    return(2*radii);
}
const circumference=function(radii){
    return(2*Math.PI*radii);


}
/*
console.log(calculate(radius,area));
console.log(calculate(radius,diameter));
console.log(calculate(radius,circumference));


/*
[
  3.141592653589793,
  12.566370614359172,
  28.274333882308138,
  50.26548245743669
]
[ 2, 4, 6, 8 ]
[
  6.283185307179586,
  12.566370614359172,
  18.84955592153876,
  25.132741228718345
]
*/

//make similar to map

// writing in map logic ==> this is how map implements 
// this ==> radius 
Array.prototype.calculate=function(logic){
    const output=[];
    for(let i=0;i<this.length;i++)
    {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));

