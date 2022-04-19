var totalPrice = 0

function nameConfirm() {
    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let uAddress = document.getElementById("userAddress").value
    let nameConfirmMSG = "Your Name is: " + fName + " " + lName;
    //let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //document.getElementById("currentTime").value = time;
    let newLine = "\r\n";
    alert(nameConfirmMSG += newLine + "Your Address is: " + uAddress);
    //alert(time)
}
function contactMethodConfirm() {
    let optionMethod = document.querySelector('input[name = "contactMethod"]:checked').value;
    if (optionMethod == 'Delivery') {
       alert("You chose to have your order delivered!");
    }
    else if (optionMethod == 'Pick-Up') {
        alert("You chose to pick up your order in store!");
    }
    else if (optionMethod == 'Dine-In') {
        alert("You have chose to Dine In!");
    }
    else {
       alert ("Oops! try again!");
    }
}
function toppingsConfirm() {
    var myArray = [];
    var myPrice = 0;
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    let t1 = document.getElementById("checkbox0").value;
    let t2 = document.getElementById("checkbox1").value;
    let t3 = document.getElementById("checkbox2").value;
    let t4 = document.getElementById("checkbox3").value;
    let t5 = document.getElementById("checkbox4").value;
    let t6 = document.getElementById("checkbox5").value;
    let t7 = document.getElementById("checkbox6").value;
    let t8 = document.getElementById("checkbox7").value;
    
    let p1 = 0
    let p2 = .5
    let p3 = .25
    let p4 = .25
    let p5 = .25 
    let p6 = .5
    let p7 = .25
    let p8 = .25
    

    if (document.getElementById("checkbox0").checked) {
        myPrice = myPrice + p1;
    }
    if (document.getElementById("checkbox1").checked) {
        myPrice = myPrice + p2;
    }
    if (document.getElementById("checkbox2").checked) {
        myPrice = myPrice + p3;
    }
    if (document.getElementById("checkbox3").checked) {
        myPrice = myPrice + p4;
    }
    if (document.getElementById("checkbox4").checked) {
        myPrice = myPrice + p5;
    }
    if (document.getElementById("checkbox5").checked) {
        myPrice = myPrice + p6;
    }
    if (document.getElementById("checkbox6").checked) {
        myPrice = myPrice + p7;
    }
    if (document.getElementById("checkbox7").checked) {
        myPrice = myPrice + p8;
    }
    for(i=0; i<checkboxes.length; i++) {
        myArray.push(checkboxes[i].value)
    }
    alert("You have chosen the following toppings: " + "\n" + myArray)
    alert("The Price of These Toppings In Total Is: " + "\n" + myPrice + "$")
    totalPrice = totalPrice + myPrice;
}
function pizzaSizeConfirm() {
    let myList = document.getElementById("pizzaSizeSelect");
    let myPizzaPrice = 0;
    document.getElementById("favorite").value = myList.options[myList.selectedIndex].text;
    let pizzaSize = document.getElementById("favorite").value;
    if (pizzaSize == "Personal ($8)") {
        alert("You have chosen Personal Size!")
        myPizzaPrice = 8;
    }
    else if (pizzaSize == "Small ($9)") {
        alert("You have chosen Small Size!")
        myPizzaPrice = 9;
    }
    else if (pizzaSize == "Medium ($10)") {
        alert("You have chosen Medium Size!")
        myPizzaPrice = 10;
    }
    else if (pizzaSize == "Large ($11)") {
        alert("You have chosen Large Size!")
        myPizzaPrice = 11;
    }
    else if (pizzaSize == "Extra Large ($12)") {
        alert("You have chosen Extra Large Size!")
        myPizzaPrice = 12;
    }
    alert("The Price of your pie is: " + myPizzaPrice + "$")
    totalPrice = totalPrice + myPizzaPrice;
}
function submitForm() {
    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let uAddress = document.getElementById("userAddress").value
    let nameConfirmMSG = "Your Name is: " + fName + " " + lName;
    let optionMethod = document.querySelector('input[name = "contactMethod"]:checked').value;
    let myList = document.getElementById("pizzaSizeSelect");
    let sizeSelect = myList.options[myList.selectedIndex].text;
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let currentTime = [ h, m, s ].join(':');
    let newLine = "\r\n";
    let selectedString = "";
    alert(nameConfirmMSG += newLine + "Your Address is: " + uAddress);
    if (optionMethod == 'Delivery') {
        alert("Your contact method for your order is: " + optionMethod + "\r\n" + "It will be delivered in 30 minutes to: " + uAddress);
    }
    else {
        alert("Your contact method for your order is: " + optionMethod);
    }
    for(i=0; i<=7; i++) {
        if(document.querySelector('input[name=checkbox' + i +']:checked')) {
            alert("You have chosen the following topping for your pizza: " + document.getElementById("checkbox" + i).value);
            }
        }
    alert("Your pizza will be: " + sizeSelect + " Size");
    alert("The Total Price of your order is: " + "\n" + totalPrice + "$");
    let x = confirm("Would you like to submit your order?")
    if (x == true) {
        document.write("Your order was submitted at: " + currentTime + "<br>" + "Thank You " + fName + "!"
        + "<br>" + "Your order was placed on: " + today.toLocaleDateString() + "<br>" + "The Total of Your Order is: " + totalPrice + "$");
    }
    else {
        alert("You have canceled the order submission")
    }
    //alert(x)
}