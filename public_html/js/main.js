// acctOptions.forEach((option) => {
//   option.addEventListener("click", function () {
//     option.toggleClass("active-menu");

//     // if (activeTab) option.classList.remove("active-menu");
//     // activeTab = option;
//     // console.log(activeTab);
//     // activeTab.classList.add("active-menu");
//   });
// });
// var acctOptions = document.getElementById("pri-nav").querySelectorAll("a");
// for (var i = 0; i < acctOptions.length; i++) {
//   var current = document.getElementsByClassName("active-menu");
//   current[0].className = current[0].className.replace(" active-menu", "");
//   this.className += " active-menu";
// }

// function jay(event) {
//   var acctOptions = document.getElementById("pri-nav").querySelectorAll("a")[0];
//   var acctOptions1 = document
//     .getElementById("pri-nav")
//     .querySelectorAll("a")[1];
//   console.log(acctOptions1);
//   acctOptions.classList.add("active-menu");
//   acctOptions1.classList.toggle("active-menu");
// }

// document.addEventListener("DOMContentLoaded", function (event) {
//   var element = document.getElementById("pri-nav").querySelectorAll("a");
//   if (element) {
//     element.forEach(function (el, key) {
//       el.addEventListener("click", function () {
//         console.log(key);
//         el.classList.toggle("active-menu");
//         element.forEach(function (ell, els) {
//           if (key !== els) {
//             ell.classList.remove("active-menu");
//           }
//           console.log(els);
//         });
//       });
//     });
//   }
// });

// var items = document.querySelectorAll("a");
// console.log(items);
// items.forEach((item) => {
//   item.addEventListener("click", function () {
//     items.forEach((itm) => itm.classList.remove("active-menu"));
//     this.classList.add("active-menu");
//   });
// });
