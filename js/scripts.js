function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var return_error = document.getElementById("return_error");
    var text;
    
    return_error.style.padding = "10px";

    if(name.length <5){
        text = "Please enter a valid name";
        return_error.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please enter a valid email";
        return_error.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 11){
        text = "Please enter a real phone number";
        return_error.innerHTML = text;
        return false;
    }

    if(messages.length < 100){
        text = "Message length must not be less than 100 characters";
        return_error.innerHTML = text;
        return false;
    }

    alert("Successfully submitted")
    return true;
}


