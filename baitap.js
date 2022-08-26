// const changeColor = (color) => {
//   document.querySelector("#txt-h1").style.color = color;
// };

let arrSpan = document.querySelectorAll(".span-color");

for (let index = 0; index < arrSpan.length; index++) {
  arrSpan[index].onclick = () => {
    document.querySelector("#txt-h1").style.color = arrSpan[index].id;
  };
}

// document.querySelector(".span-color").onclick = () => {
//   document.querySelector("#txt-h1").style.color = color;
// };
