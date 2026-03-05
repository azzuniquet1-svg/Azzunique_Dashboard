
function initializeDashboard() {

  const cards = document.querySelectorAll(".service-card");
  cards.forEach(card => {
    card.addEventListener("click", function () {
      const title = this.querySelector("h4");
      if (title) console.log(title.innerText + " clicked");
    });
  });

  function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return;

    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / Math.abs(range)));
    if (!stepTime || stepTime === Infinity) stepTime = 10;

    let timer = setInterval(function () {
      current += increment;
      obj.innerHTML = "₹ " + current.toLocaleString();
      if (current === end) clearInterval(timer);
    }, stepTime);
  }

  animateValue("todayTransactions", 0, 2546, 1500);
  animateValue("todayEarning", 0, 1280, 1500);
  animateValue("walletBalance", 0, 3892, 1500);

  const ctx = document.getElementById("transactionChart");
  if (ctx) {
    if (window.transactionChartInstance) {
      window.transactionChartInstance.destroy();
    }

    window.transactionChartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
          label: "Transactions",
          data: [1200, 1900, 1500, 2200, 3000, 2800, 3500],
          borderWidth: 3,
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }
}

initializeDashboard();
