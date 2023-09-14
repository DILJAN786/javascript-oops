console.log("hello calsses")


class Myclass{
    constructor(firstname,lastname,age){
        console.log("this is me constructor")
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    about() {
        return(`my name is ${this.firstname} and my age is ${this.age}`)
    }
}

const user1 = new Myclass("diljan" , "ali" , 23)
const user2 = new Myclass("hassan" , "ali" , 23)

console.log(user1);
const udata = user2.about();
console.log(udata)