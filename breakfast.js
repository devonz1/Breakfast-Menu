 
let logge = document.getElementById("login");
let orders = document.getElementById("order");
let names = document.getElementById("name");
 

logge.addEventListener("submit",(e) => {
    e.preventDefault();
     

    if (orders.value == "" || names.value == "") {
        alert("please enter valid values in both fields");
    } else {
        alert("Thank You for Submitting Your order with Us");
        console.log(
            `This order has a order # of ${orders.value} and Customer name is ${names.value}`
        );
        orders.value = "";
        names.value = "";

    }
});

///line 7 e.preventdefault will prevent the form from automatically
//being submitted once the submit button is clicked it prevents the default
/// action of the form being automatically submitted from occuring.