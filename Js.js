// let button = document.getElementById("submit_button");
// button.addEventListener("click", (event) => {
//   let inputEl = document.getElementById("input_field").value;
//   document.getElementById("output").innerHTML = "Вы ввели: " + inputEl;
// });

//double elements

// let a = [1, 2, 3, 4, 5, 6, 1, 7, 2, 3];

// let double = [];

// for (i = 0; i < a.length; i++) {
//   for (j = i + 1; j < a.length; j++) {
//     if (a[i] === a[j]) {
//       double = a[i];
//       console.log(double);
//     }
//   }
// }

function findDouble(arr) {
  const hash = {};

  const result = [];

  arr.forEach((i) => {
    if (hash[i]) {
      result.push(i);
    } else {
      hash[i] = true;
    }
  });

  console.log(hash);

  return result;
}

console.log(findDouble([1, 2, 8, 3, 4, 5, 6, 7, 6, 8, 9]));
