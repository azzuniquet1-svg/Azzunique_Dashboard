function authorizeUser(){

    const consent = document.getElementById("consent");

    if(!consent.checked){
        alert("Please give consent before authorization.");
        return;
    }

    alert("Authorization Successful ✅");

    // Yaha tum API call kar sakte ho
}
