console.log("hello find")

const user = [
    {userId:1,userName:"diljan"},
    {userId:2,userName:"ali"},
    {userId:3,userName:"malik"},
    {userId:4,userName:"khan"}
]

const data = user.find((user1)=>user1.userId===3);
console.log(data)