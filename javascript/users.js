
const users = [
  {
    name: "Rahul Sharma",
    email: "rahul@email.com",
    username: "rahul123",
    wallet: "₹2500",
    package: "Retailer",
    date: "12 Feb 2026"
  },
  {
    name: "Amit Verma",
    email: "amit@email.com",
    username: "amit007",
    wallet: "₹5400",
    package: "Distributor",
    date: "10 Feb 2026"
  }
];

const tableBody = document.querySelector("#usersTable tbody");

users.forEach(user => {
  const row = `
    <tr>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.username}</td>
      <td><span class="wallet-badge">${user.wallet}</span></td>
      <td>${user.package}</td>
      <td>${user.date}</td>
    </tr>
  `;
  tableBody.innerHTML += row;
});

