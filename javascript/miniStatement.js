let transactions = [
    {
        date: "2026-02-16",
        txnId: "TXN2001",
        description: "Money Transfer",
        debit: 2000,
        credit: 0,
        balance: 25000
    },
    {
        date: "2026-02-15",
        txnId: "TXN2002",
        description: "Cash Deposit",
        debit: 0,
        credit: 5000,
        balance: 27000
    },
    {
        date: "2026-02-14",
        txnId: "TXN2003",
        description: "Quick Transfer",
        debit: 1000,
        credit: 0,
        balance: 22000
    }
];

function loadStatement() {
    let table = document.getElementById("statementTable");
    table.innerHTML = "";

    transactions.forEach(txn => {

        let row = `
            <tr>
                <td>${txn.date}</td>
                <td>${txn.txnId}</td>
                <td>${txn.description}</td>
                <td class="debit">${txn.debit ? "₹ " + txn.debit : "-"}</td>
                <td class="credit">${txn.credit ? "₹ " + txn.credit : "-"}</td>
                <td>₹ ${txn.balance}</td>
            </tr>
        `;

        table.innerHTML += row;
    });
}

window.onload = function () {
    loadStatement();
};
