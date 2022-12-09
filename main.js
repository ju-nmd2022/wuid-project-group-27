
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




let hasOrderDetails = false;
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
    hideOrderDetails();
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

// document.querySelectorAll("payButton").forEach(item => {
//     item.addEventListener("click", PayButton => {
//         recipe = item.value
//     })
// })

// function checkInput() {
//  if (emailAdress.value == "" || number.value == "" || exDate.value == "" || cvc.value == "" || 
//  cardHolder.value == "" || street.value == "" || city.value == "" || zipCode.value == "" || cvc.value == "" ) {
// errorMesssage.innerHTML = "bajs"
//  }else{
//     errorMesssage.innerHTML = ""
//  }
// }

// function checkoutPage() {
// PayButton.addEventListener("click", checkInput)
// }

// function hidePayButton() {
//     PayButton.hidden = true;
// }

// function showPayButton() {
//     PayButton.hidden = false;
// }

// function hideEmailAdress() {
//     emailAdress.hidden = true;
// }

// function showEmailAdress() {
//     emailAdress.hidden = false;
// }

// emailAdress.addEventListener("click", function() {
// if (!hasEmailAdress) {
//     showPayButton();
//     showOrderDetails();
// }
// }



