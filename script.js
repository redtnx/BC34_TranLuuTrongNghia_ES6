// 1: let, const = var
/*
    1: Cơ chế hoisting
        - var: tự động đưa các biến được khai báo lên phía trên
        - let, const: không có cơ chế như var, đưa vào vùng nhớ chết (Temporary Dead Zone)
    2: Khai báo lại
        - var: cho phép khai báo trùng tên biến
        - let, const: không cho phép khai báo trùng tên biến
    3: Phạm vi hoạt động
        - var: global scope
        - let, const: block scope
    4: const:
        - không cho gán lại giá trị
        - có thể thay đổi được giá trị trong một thuộc tính của đối tượng
*/

// var title = "Cybersoft";
// let title = "Cybersoft";
// const title = "Cybersoft";

// function getNumber() {
//   let number = 1;

//   if (true) {
//     let number = 2;
//   }

//   console.log(number);
// }
// getNumber()

// const object = {
//   id: 1,
//   userName: "Nguyễn Văn A",
// };

// object.id = 2;

// console.log(object.id);

// 2: arrow function
// khai báo function ES5
// closure function: lấy biến hàm cha sử dụng cho hàm con
// function getNumber(number) {
//   function sumNumber(numberTwo) {
//     return number + numberTwo;
//   }
//   return sumNumber();
// }

// getNumber(1);

// // khai báo arrow function ES6
// const getNumberArrow = (number = (numberTwo) => {
//   let title = "Hello";
//   return number + numberTwo;
// });
// getNumberArrow(1);

// 3: con trỏ This
// let object = {
//   id: 1,
//   userName: "Nguyễn Văn A",
//   getName() {
//     console.log(this.userName);
//   },
// };

// object.getName();

// 4: default parameter values
// const getTitle = (title = "Hello") => {
//   console.log(title);
// };
// getTitle("Cybersoft");

// 5: rest parameter
let toan = 7;
let ly = 10;
let hoa = 3;

// rest parameter: nhận vào tham số bất kì
// trả ra danh sách mảng tham số nhận vào, không giới hạn độ dài

const getSum = (...rest) => {
  let tinhTong = 0;
  for (let index = 0; index < rest.length; index++) {
    tinhTong += rest[index];
  }
  console.log(rest);
  console.log(tinhTong);
};

getSum(toan, ly, hoa);

// 6: Spread operator: gán tất cả thuộc tính và giá trị của một biến hoặc đối A sang biến hoặc đối tượng B (tách ra vùng nhớ độc lập)
// có thể thêm thuộc tính mới cho đối tượng B
let a = { id: 1, hoTen: "Ng văn a", lopHoc: "2a" };
// let b = { id: 2 };
// b = { ...a, tuoiTac: 30 };
// a = { ...a, bietDanh: "A-man" };

// console.log(b);
// console.log(a);

// array
// let arrNum = [2, 3, 4, 5, 6];
// let arrNum2 = [...arrNum];

// // array object
// let arrA = [
//   { id: 1, hoTen: "Ng văn a", lopHoc: "2a" },
//   { id: 2, hoTen: "Ng văn b", lopHoc: "3a" },
//   { id: 3, hoTen: "Ng văn c", lopHoc: "4a" },
// ];

// let arrB = [...arrA]

// 7: Destructuring: bóc tách phần tử
let { hoTen, id, lopHoc } = a;
console.log(hoTen, id, lopHoc);
