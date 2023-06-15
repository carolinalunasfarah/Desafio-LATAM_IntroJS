let price = 400000;
let amount = document.querySelector("#selectedAmount");
let selectedColor = document.querySelector("#selectedColor");

let button = document.querySelector("#calculateTotal")
button.addEventListener("click", () => {
document.querySelector("#total").innerHTML= (amount.value * price).toLocaleString();
document.querySelector("#amount").innerHTML= amount.value;
document.querySelector("#color").style.backgroundColor = selectedColor.value;
})

let refresh = document.querySelector("#refresh")

refresh.addEventListener("click", () => {
document.querySelector("#total").innerHTML= 0;
document.querySelector("#amount").innerHTML= "";
document.querySelector("#selectedAmount").value= "";
document.querySelector("#selectedColor").value= "";
document.querySelector("#color").style.backgroundColor= "";
})