console.log("hello filter")

const number=[1,2,3,4,5,6,7,8,9,10];

const data = number.filter((num) =>num%2===0)

console.log(data);
// console.log(number)


const numbers = [2,3,5,6,7,8,9,10]

const iseven = function(num){
    return num%2===0
}

const isodd = function(num){
    return num%2 !== 0
}

const even = numbers.filter(iseven)
const odd = numbers.filter(isodd)

console.log(even)
console.log(odd)
