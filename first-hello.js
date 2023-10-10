console.log("hello from advance js");
var myVar = "diljan2"
let hello = () => {
    // const myVar = "diljan"
    const hello2 = () => {
        // const myVar = "diljan2"
        console.log("my function 2 inside fuacntion" , myVar);
    }
    myVar = "jani"
    console.log("hi " ,myVar);

    hello2();
}
hello();

