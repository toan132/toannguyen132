// bai 1
// function checAge (age){
//     if(age > 18){
//         return true;
//     }
//     else{
//         return confirm("Did parents allow you?");
//     }
// }
// viet lai
// let age = prompt("nhap tuoi cua ban");
// let tuoi = (age < 18) ? "too young": "old enough";
// console.log(tuoi);

// bai 2

// function min(a,b){
//     if (a > b){
//         return b;
//     }
//     else if (a < b){
//         return a;
//     }
// }
// let GTNN = min (3 ,10);
// console.log(GTNN);

// bai 3 

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
// );

// thay the bang ham mui ten

// var foo = (question, yes, no) => {if (confirm(question)) yes(); else no()};
// var r = foo ("Do you agree", function(){alert("You agreed.");}, function(){alert("You canceled the execution.");});


// bai 4

// function admin(tenDangNhap, matKhau){
//     if (tenDangNhap==="Admin"){
//         if(matKhau ==="mindX"){
//             console.log("Chào Mừng!");
//         }
//         else if(matKhau ===" "){
//             console.log("Đã huỷ");
//         }
//         else{
//             console.log("Mật khẩu sai");
//         }
//     }
//     else if(tenDangNhap ===" "){
//         console.log("Canceled");
//     }
//     else if(tenDangNhap==="Esc"){
//         console.log("Canceled");
//     }
//     else{
//         console.log("Tôi không biết bạn");
//     }
// }
// admin (prompt("Tên đăng nhập"), prompt("Mật khẩu"));


// bai 5
// var tbc = new Array();
// for (x= 0; x < 3; x++){
//     tbc[x] = prompt("Enter some data:", );
// }
// var info = prompt("Enter some data:", "");

// var tbc = prompt("Enter your name: "," ")
let tongTC = tbc =>{
    let sum = 0;
    for(let i =0; i < tbc.length; i++){
        sum += tbc[i];
    }
    return sum/tbc.length;
}
let r = tongTC([1,2,3,4]);
console.log(r);
// tinh tong trung binh cong

// tim GTNN, GTLN
const number =[53,4,567,21, -6,-10];
    let max = Math.max.apply(Math, number);
    let min = Math.min.apply(Math, number);
    console.log("Gia tri lo nhat: ", max);
    console.log("Gia tri nho nhat: ", min);
let maxC2 =number[0];
let minC2 = number[0];

// Cach 2:
for (let i = 1; i < number.length; i++){
    if (maxC2 < number[i]){
        maxC2 = number[i];
    }
    else if (minC2 > number[i]){
        minC2 = number[i];
    }
}
console.log("gia tri lon nhat: ", maxC2);
console.log("gia tri nho nhat: ", minC2);

// tinh tong cac so chan trong mang
let tongSoChan = 0;    let tongSoLe = 0;
for (let x = 0; x < number.length; x++){
    
    if(number[x]% 2==0){
        tongSoChan += number[x];
    }
    else{
        tongSoLe += number[x];
    }
}
console.log("Tong so chan: ", tongSoChan);
console.log("Tong so le: ", tongSoLe);

// so chia het cho 3:
for (let j = 0; j < number.length; j++){
    if(number[j] % 3 == 0){
        console.log("so chia het cho 3 la: ", number[j]);
    }
}