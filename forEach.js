console.log("hello forEach");

const number = [2,4,6,8,10];

number.forEach(function(num){
    console.log(`${num*3} this is our number ${num}*3`)
});


const hinsy = [1,3,5,7,9];
function each (num){
    console.log(num*2)

}
hinsy.forEach(each)

const user = [
{username: "diljan" ,age:23},
{username: "malik" ,age:24},
{username: "ali" ,age:25},
{username: "khan" ,age:26}
]


function userdata(data,index){
    console.log(`my name is ${data.username} and age is ${data.age} and index is ${index}`);
}

user.forEach(userdata)