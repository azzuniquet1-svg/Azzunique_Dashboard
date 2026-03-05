function checkBalance() {

    let accountNumber = document.getElementById("accountNumber").value.trim();

    if (accountNumber === "") {
        alert("Please enter account number");
        return;
    }

    // Dummy balance (you can connect backend later)
    let balance = Math.floor(Math.random() * 50000) + 1000;

    document.getElementById("balanceAmount").innerText = "₹ " + balance;

    let now = new Date();
    document.getElementById("updatedTime").innerText =
        "Last Updated: " + now.toLocaleString();

    document.getElementById("resultCard").style.display = "block";
}
