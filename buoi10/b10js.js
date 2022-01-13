// // bai 1
// let person = {
//     name: 'Bob',
//     occuapation: 'web developer',
//     hobbies: 'painting',
// };

// // các cách truy cấp được các thuộc tính bên trong
// cach 1
// console.log(person.name);
// console.log(person.occuapation);
//console.log(person.hobbies);
// cach 2

// console.log(person['name']);
// console.log(person['occuapation']);
// console.log(person['hobbies']);
//  Bai 2

// let obj ={
//     b: 2,
//     a: 1,
//     c: 3,
// };

// let arr = Object.keys(obj);
// for(var k in arr){
//     arr[k] = arr[k].toUpperCase();
// }
// console.log(arr);


// bai 3
// let myFamily = {
//     quantity: 4,
//     member: ["Dad", "Mom", "Me", "Daughter"],
//     location: "Vietnam",
// };

// let family = Object.create(myFamily);



// bai 4
let obj = {
    foo: { 
        a: "hello", 
        b: "world" },
    bar: ["example", "mem", null, 
    { xyz: 6 },
     88],
    qux: [4, 8, 12]
};

// cach 1

obj.bar[3].xyz = 606;
console.log(obj.bar[3]);
// cach 2
function arr(oop){
    oop.xyz = 606;
}   //{a: 'hello, b: 'world}, ['example','mem', null, {xyz: 6}, 88], [4,8,12]

arr(obj.bar[3]);

console.log(obj.bar[3]);
























