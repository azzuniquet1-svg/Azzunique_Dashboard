function rechargeNow() {

    let mobile = document.getElementById("mobile").value.trim();
    let operator = document.getElementById("operator").value;
    let amount = document.getElementById("amount").value;

    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Enter valid 10 digit mobile number");
        return;
    }

    if (operator === "") {
        alert("Select operator");
        return;
    }

    if (amount <= 0) {
        alert("Enter valid recharge amount");
        return;
    }

    let txnId = "RCG" + Math.floor(Math.random() * 100000);

    document.getElementById("rechargeDetails").innerHTML =
        `Mobile: ${mobile}<br>
         Operator: ${operator}<br>
         Amount: ₹ ${amount}<br>
         Transaction ID: ${txnId}`;

    document.getElementById("resultCard").style.display = "block";
}
