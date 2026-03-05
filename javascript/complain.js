function raiseComplaint() {
    let service = document.getElementById("service").value;
    let transactionId = document.getElementById("transactionId").value;
    let message = document.getElementById("message").value;

    if (service === "" || transactionId === "" || message === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("historyTable");

    let row = table.insertRow();

    let ticketId = "TCK" + Math.floor(Math.random() * 10000);
    let date = new Date().toLocaleDateString();

    row.insertCell(0).innerHTML = ticketId;
    row.insertCell(1).innerHTML = service;
    row.insertCell(2).innerHTML = transactionId;
    row.insertCell(3).innerHTML = message;
    row.insertCell(4).innerHTML = date;

    alert("Complaint Raised Successfully!");

    // Clear fields
    document.getElementById("service").value = "";
    document.getElementById("transactionId").value = "";
    document.getElementById("message").value = "";
}
