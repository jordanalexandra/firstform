const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if(document.getElementById("fname").value == "") {
        document.getElementById("error-message").style.visibility="visible";
        document.getElementById("fname").style.border="1px solid red";
      }
      else if(document.getElementById("fname").value != "") {
        document.getElementById("error-message").style.visibility="hidden";
        document.getElementById("fname").style.border="1px solid hsl(186, 15%, 59%)";
}});

submit.addEventListener("click", () => {
    if(document.getElementById("lname").value == "") {
        document.getElementById("error-message-two").style.visibility="visible";
        document.getElementById("lname").style.border="1px solid red";
      }
      else if(document.getElementById("lname").value != "") {
        document.getElementById("error-message-two").style.visibility="hidden";
        document.getElementById("lname").style.border="1px solid hsl(186, 15%, 59%)";
}});

submit.addEventListener("click", () => {
    if(document.getElementById("email").value == "") {
        document.getElementById("error-message-three").style.visibility="visible";
        document.getElementById("email").style.border="1px solid red";
      }
      else if(document.getElementById("email").value != "") {
        document.getElementById("error-message-three").style.visibility="hidden";
        document.getElementById("email").style.border="1px solid hsl(186, 15%, 59%)";
}});



submit.addEventListener("click", () => {
    if (document.querySelector('input[name="enquiry"]:checked')  )
        {
        document.getElementById("error-message-four").style.visibility="hidden";
    } else {
        document.getElementById("error-message-four").style.visibility="visible";
        
    };
});


submit.addEventListener("click", () => {
    if(document.getElementById("message").value == "") {
        document.getElementById("error-message-five").style.visibility="visible";
        document.getElementById("message").style.border="1px solid red";
      }
      else if(document.getElementById("message").value != "") {
        document.getElementById("error-message-five").style.visibility="hidden";
        document.getElementById("message").style.border="1px solid hsl(186, 15%, 59%)";
}});


submit.addEventListener("click", () => {
    if (document.querySelector('input[name="consent"]:checked')  )
        {
        document.getElementById("error-message-six").style.visibility="hidden";
    } else {
        document.getElementById("error-message-six").style.visibility="visible";
    };
});


const checked = document.getElementById("enquiry");

checked.addEventListener("click", () => {

    document.getElementById("option-one").style.backgroundColor="hsl(148, 38%, 91%)";
    document.getElementById("option-two").style.backgroundColor="white";
});

const checkedTwo = document.getElementById("support");

checkedTwo.addEventListener("click", () => {

    document.getElementById("option-two").style.backgroundColor="hsl(148, 38%, 91%)";
    document.getElementById("option-one").style.backgroundColor="white";
});













//gets rid of default pop up error messages

document.addEventListener('invalid', (function(){
    return function(e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
      // optionally fire off some custom validation handler
      // myValidation();
    };
})(), true);


// Form submission

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("popup").style.visibility="visible";
});

let close = document.getElementById("btn-close");

close.addEventListener("click", () => {
    document.getElementById("popup").style.visibility="hidden";
    document.getElementById("form").reset();
})




