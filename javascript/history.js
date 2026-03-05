let transactions = [
    {
        date: "2026-02-16",
        txnId: "TXN1001",
        type: "Money Transfer",
        amount: 2000,
        status: "Success",
        balance: 15000
    },
    {
        date: "2026-02-15",
        txnId: "TXN1002",
        type: "Quick Transfer",
        amount: 1000,
        status: "Pending",
        balance: 17000
    },
    {
        date: "2026-02-14",
        txnId: "TXN1003",
        type: "Mini Statement",
        amount: 0,
        status: "Success",
        balance: 18000
    }
];

function loadTable(data) {
    let table = document.getElementById("historyTable");
    table.innerHTML = "";

    data.forEach(txn => {
        let row = `
            <tr>
                <td>${txn.date}</td>
                <td>${txn.txnId}</td>
                <td>${txn.type}</td>
                <td>₹ ${txn.amount}</td>
                <td><span class="badge ${txn.status.toLowerCase()}">${txn.status}</span></td>
                <td>₹ ${txn.balance}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

function searchHistory() {
    let fromDate = document.getElementById("fromDate").value;
    let toDate = document.getElementById("toDate").value;
    let searchTxn = document.getElementById("searchTxn").value.toUpperCase();

    let filtered = transactions.filter(txn => {

        let matchTxn = searchTxn === "" || txn.txnId.includes(searchTxn);

        let matchFrom = fromDate === "" || txn.date >= fromDate;
        let matchTo = toDate === "" || txn.date <= toDate;

        return matchTxn && matchFrom && matchTo;
    });

    loadTable(filtered);
}

window.onload = function() {
    loadTable(transactions);
};
