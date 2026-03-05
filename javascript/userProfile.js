function saveProfile(){

    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if(name === "" || email === "" || phone === ""){
        alert("Please fill all fields");
        return;
    }

    document.getElementById("displayName").innerText = name;

    alert("Profile Updated Successfully ✅");
}
