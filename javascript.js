let numberOfBoxes = prompt("Enter the number of boxes:");
let sqrtOfNumberOfBoxes = Math.floor(Math.sqrt(numberOfBoxes));
let percentageOfBoxes = 100 / sqrtOfNumberOfBoxes;

for (let i = 0; i < sqrtOfNumberOfBoxes; i++) {
  for (let j = 0; j < sqrtOfNumberOfBoxes; j++) {
    let div = document.createElement("div");
    div.setAttribute("class", "boxClass");
    document.getElementById("container").appendChild(div);
  }
}


const boxes = document.querySelectorAll('.boxClass');
boxes.forEach(box => {
  box.style.width = percentageOfBoxes + "%";
  box.style.height = percentageOfBoxes + "%";
});
