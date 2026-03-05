function login(){
    const mobile = document.getElementById("mobile").value;
    const error = document.getElementById("errorMsg");

    if(mobile.length !== 10 || isNaN(mobile)){
        error.style.display = "block";
        return;
    }

    error.style.display = "none";

    alert("OTP Sent Successfully!");
    // window.location.href = "otp-page.html";
}