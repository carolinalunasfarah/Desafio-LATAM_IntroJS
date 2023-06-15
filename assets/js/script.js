let price = 400000;
let amount = document.querySelector("#selectedAmount");
let selectedColor = document.querySelector("#selectedColor");

let button = document.querySelector("#calculateTotal")
button.addEventListener("click", () => {
document.querySelector("#total").innerHTML= (amount.value * price).toLocaleString();
document.querySelector("#amount").innerHTML= amount.value;
document.querySelector("#color").style.backgroundColor = selectedColor.value;
})