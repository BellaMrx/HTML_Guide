document.getElementById("myForm").onsubmit = function() {
    var muser = document.getElementById("name");
    var email = document.getElementById("mail");
    var message = document.getElementById("message");
    var dsgvo = document.getElementById("dsgvo");

    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    var error4 = document.getElementById("error4");
    error1.innerHTML = "";
    error2.innerHTML = "";
    error3.innerHTML = "";
    error4.innerHTML = "";

    if (muser.value == "") {
        error1.innerHTML = "Field is required";
        muser.focus();
        return false;
    }
    if (email.value == "") {
        error2.innerHTML = "Field is required";
        email.focus();
        return false;
    }
    if (message.value == "") {
        error3.innerHTML = "Field is required";
        message.focus();
        return false;
    }
    if (message.value == "") {
        error4.innerHTML = "Specification is required";
        message.focus();
        return false;
    }
};

document.getElementById("myForm").onreset = function() {
    var muser = document.getElementById("name");
    var email = document.getElementById("mail");
    var message = document.getElementById("message");
    var dsgvo = document.getElementById("dsgvo");

    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    var error4 = document.getElementById("error4");
    error1.innerHTML = "";
    error2.innerHTML = "";
    error3.innerHTML = "";
    error4.innerHTML = "";
};