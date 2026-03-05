document.getElementById("transferForm").addEventListener("submit", function(e){
    e.preventDefault();

    const account = document.getElementById("accountNo").value.trim();
    const ifsc = document.getElementById("ifsc").value.trim();
    const beneficiary = document.getElementById("beneficiary").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const confirm = document.getElementById("confirm").checked;
    const errorMsg = document.getElementById("errorMsg");

    if(account === "" || ifsc === "" || beneficiary === "" || amount === ""){
        errorMsg.textContent = "All fields are required.";
        return;
    }

    if(!confirm){
        errorMsg.textContent = "Please confirm the transaction.";
        return;
    }

    errorMsg.textContent = "";

    alert("Transfer Successful!");
    // You can redirect here
    // window.location.href = "success.html";
});
