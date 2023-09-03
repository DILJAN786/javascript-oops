console.log("hello map(method)")

//  <<<<<< map >>>>>>

const number = [2,4,6,8,10];

const multi = function(num){
    return num*num
}

const numbers = number.map(multi)
console.log(number);


const odd = [1,3,5,7,9];

const hello = odd.map((num)=>num * num)

console.log(hello);

//  <<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<><><><>>>


const user = [
    {username: "diljan" ,age:23},
    {username: "malik" ,age:24},
    {username: "ali" ,age:25},
    {username: "khan" ,age:26}
    ]


const data =     user.map((data)=>(data.username))
console.log(data)

console.log(`my name is ${data[0]}`)

for(let i =0 ; i<data.length;i++){
    console.log(data[i])
}