const input =[1,4,6,0,8,3,5];

// i need to get all the number greater than 4 ;

const greaterThan4=function(num){
    return num>4;
}

Array.prototype.filter=function(logic){
    const output=[];
    for(let i=0;i<this.length;i++)
    {
        if(logic(this[i]))
        {
            output.push(this[i])
        }
    }
    return output
}
console.log(input.filter(greaterThan4));


