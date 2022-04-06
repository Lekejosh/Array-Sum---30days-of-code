//Select element
let formAdd = document.querySelector(".addNumbers");
let searchSum = document.querySelector(".find-sum");
let showArrNum = document.querySelector(".showArrNum");

//Add Numbers event listener

let arr = [];
formAdd.onsubmit = (e) => {
  // Prevent default reload
  e.preventDefault();
  // Push Number inside the array
  arr.push(Number(formAdd.array.value));
  // console.log(formAdd.array.value);

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
  // console.log(numToFind);
  //Reset form search
  searchSum.reset();
  // Reset show area content
  showArrNum.innerHTML = "";
  //Run function
  sumArrayNumbers(numToFind, arr);
};
// Find sum inside the array
function sumArrayNumbers(numToFind, arr) {
  // first loop
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    //second loop
    for (let b = 0; b < arr.length; b++) {
      //Sum if the index is !== different
      let res = arr[b] + (i !== b ? num : undefined);
      // Check if match
      if (res === numToFind) {
        // Create a div
        let div = document.createElement("div");
        // Add Content
        div.innerHTML = `${arr[b]} + ${num} = ${numToFind}`;
        // Append show results
        showArrNum.prepend(div);
      }
    }
  }
}
