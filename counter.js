let counter = 0;

// getting DOM elements using id
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const counterDisplay = document.getElementById("counter");
const resetButton = document.getElementById("reset_button");

// onclick action for increment button
incrementButton.addEventListener("click", () => {
  counter++;
  counterDisplay.innerText = counter;
});

// onclick action for decrement button
decrementButton.addEventListener("click", () => {
  counter--;
  counterDisplay.innerText = counter;
});

resetButton.addEventListener("click",() => {
  counter=0;
  counterDisplay.innerText = counter;
})

