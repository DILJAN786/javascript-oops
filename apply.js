console.log("hello apply")


const user1 =  {
    firstname:"diljan",
    age:22,
    about: function(hooby,music){
        console.log(`my name is ${this.firstname} and my age is ${this.age} and my hobby is ${hooby} and fav music is ${music}`)
    }
}


const user2 =  {
    firstname:"malik",
    age:23,
}


user1.about.apply(user2,["crick","tumeryasspass"]);