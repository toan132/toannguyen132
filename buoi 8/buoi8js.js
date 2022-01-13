// bai 1
// var a = 10;
// var b = Number(a);
// var c = a *1;
// nhận xet 3 giá trị a, b, c bằng nhau 

// bai 2
// var a = 10;
// var b = "";
// if (a) {
//     console.log("a is truthy");
// }
// if (b){
//     console.log("b is truthuy");
// }
// giá trị 10 chuyển sang giá trị true
// giá trị ("") chuyển sang giá trị false
// sẽ log ra a is truthy.

// Logical Operators & Conditional

//1
// kết quả trả về là true
// let a ="mindx";
// let b ="";
// if(a||b){
//     console.log("hello")
// }
//2
//kết quả trả về là true
// let a = "mindx";
// let b = "";
// if(a && true && !b){
//     console.log("hello");
// }

// bai 3
// let a = -1;
// let b = 1;
// // true
// if (a||b){ 
//     console.log("true"); 
// }
// // true
// if (a*b && b || a/b){
//     console.log("True");
// }
// // false
// if (a%b && b){
//     console.log("false");
// }

// bai 4
// let x = prompt("Nhap x")
// let du = x % 3;
// let chiahet = x / 3;
// if (x % 3 == 0){
//     console.log("so chia het cho 3");
//     console.log("ket qua: ", chiahet);
// }
// else{
//     console.log("number khong chia het cho 3 va du: ", du);
// }

// tạo máy tính cơ bản với các chứ năng: +, -, * và /.

let operator = prompt("Nhap phep tinh", "0: la thoat", "1: a + b", " 2: a - b", "3: a * b", "4: a / b");
let a = prompt("Nhap a");
let b=prompt("Nhap b");
let result;
if(operator == 0){
    console.log("========== DA THOAT ==========")
    break;
}
else if  (operator == 1){
    console.log("thuc hien phep tinh cong")
    result = a + b;
    console.log(`${a} ${operator} ${b} = ${result}`);
    break;
}
else if  (operator == 2){
    console.log("thuc hien phep tinh cong")
    result = a - b;
    console.log(`${a} ${operator} ${b} = ${result}`);
    break;
}
else if  (operator == 3){
    console.log("thuc hien phep tinh cong")
    result = a * b;
    console.log(`${a} ${operator} ${b} = ${result}`);
    break;
}
else if  (operator == 4){
    console.log("thuc hien phep tinh cong")
    result = a / b;
    console.log(`${a} ${operator} ${b} = ${result}`);
    break;
}
else{
    console.log("da loi vui long nhap lai trang")
}

// Viết chương trình tìm số nguyên tố

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (number < 2){
    console.log("so ban nhap khong phai la so nguyen to");
    isPrime = false;
}
else{
    for(let i = 2; i < number; i++)
    {
        if(n % i == 0)
        {
            isPrime = false; // false thi khong phai la so nguyen to
            break;
        }
    }
}
// kiem tra isPrime
if(isPrime==true){
    console.log(number + " la so nguyen to");
}
else{
    console.log(number + " khong phai la so nguyen to");
}