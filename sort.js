console.log("hello slice")

const item = [
    {productid:1,productnmae:"p1",  price:200},
    {productid:2,productnmae:"p2",  price:300},
    {productid:3,productnmae:"p3",  price:100},
    {productid:4,productnmae:"p4",  price:50}
]


const data = item.slice(0).sort((a,b)=>{
  return b.price - a.price
});

console.log(data)