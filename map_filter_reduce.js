const input=[1,2,3,4];

// we need an array which has double , triple ,squares 
//we can implement using HOF 
// we will see map which is an HOF 
const double = function(num){
    return num*2;

}
const triple = function(num){
    return num*3;

}
const squares=function(num){
    return num*num;
}

Array.prototype.map=function(logic){
    const output=[];
    for(let i=0;i<this.length;i++)
    {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(input.map(double));
console.log(input.map(triple));
console.log(input.map(squares));


// filter to get all even numbers from the array 


