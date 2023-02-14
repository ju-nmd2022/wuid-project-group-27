
const orderButton = document.getElementById("order")
const orderDetails = document.getElementById("orderDetails")
const emailAdress = document.getElementById("emailAdress")
const number = document.getElementById("number")
const exDate = document.getElementById("exDate")
const cvc = document.getElementById("cvc")
const cardHolder = document.getElementById("cardHolder")
const street = document.getElementById("street")
const city = document.getElementById("city")
const zipCode = document.getElementById("zipCode")
const PayButton = document.getElementById("payButton")
const errorMesssage = document.getElementById("errorMessage")



let hasOrderButton = false;
hideOrderDetails();
showOrderButton();


orderButton.addEventListener("click", function() {
    if (!hasOrderButton) {
        hasOrderButton = true;
        showOrderDetails();
        hideOrderButton();
    }
})

orderDetails.addEventListener("click", function() {
    if (!hasOrderDetails) {
    hasOrderDetails = false;
    showOrderButton();
   }
})

orderDetails.addEventListener("click", function() {
 if (!hasOrderDetails) {
 hasOrderDetails = true;
 showOrderDetails();
 }
})


function hideOrderDetails() {
    orderDetails.hidden = true;
}

function showOrderDetails() {
    orderDetails.hidden = false
}

function hideOrderButton() {
    orderButton.hidden = true;
}

function showOrderButton() {
    orderButton.hidden = false;
}


function checkoutPage() {
PayButton.addEventListener("click", checkInput)
}

 function hidePayButton() {
   PayButton.hidden = true; }

function showPayButton() {
   PayButton.hidden = false;
}



