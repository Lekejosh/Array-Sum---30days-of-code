//Select element
let formAdd = document.querySelector(".random-numbers");
let searchSum = document.querySelector(".find-sum");
let showArrNum = document.querySelector(".showArrNum");

//Add Numbers event listener

let arr = [];
formAdd.onSubmit = (e) => {
  // Prevent default reload
  e.preventDefault();
  // Push Number inside the array
  arr.push(Number(formAdd.array.value));
  console.log(formAdd.array.value);

  //Reset form
  formAdd.reset();
  //Reset Show area contents
  showArrNum.innnerHTML = "";
  //Append Values
  showArrNum.prepend(`${arr}`);
};

// Sum number to find the number
let numToFind = 0;
// Add form search event

searchSum.onsubmit = (e) => {
  // preventDefault reload
  e.preventDefault();
  // Add value
  numToFind = +searchSum.find.value;
  console.log(numToFind);
  //Reset form search
  searchSum.reset();
  //
  showArrNum.innerHTML = "";
  //Run function
  sumArrayNumbers(numToFind, arr);
};
// Find sum inside the array
function sumArrayNumbers(numToFind, arr) {
  // first loop
  for (let i = 0; i < arr.lenght; i++) {
    console.log(arr[i]);
  }
}
