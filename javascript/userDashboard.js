(function(){
  // Try URL param first, then sessionStorage set by layout navigation
  const params = new URLSearchParams(window.location.search);
  let user = params.get('user') || sessionStorage.getItem('selectedUser') || 'Demo User';
  if (sessionStorage.getItem('selectedUser')) sessionStorage.removeItem('selectedUser');

  // Update DOM (safe guards)
  const nameEl = document.getElementById('udName');
  const usernameEl = document.getElementById('udUsername');
  const emailEl = document.getElementById('udEmail');
  if (nameEl) nameEl.textContent = user;
  if (usernameEl) usernameEl.textContent = '@' + user.toLowerCase();
  if (emailEl) emailEl.textContent = user.toLowerCase() + '@example.com';

  // Demo data (replace with API)
  const userData = { wallet: 2450, profit: 320, package: 'Gold' };
  const walletEl = document.getElementById('walletBalance');
  const profitEl = document.getElementById('todayProfit');
  const packageEl = document.getElementById('userPackage');
  if (walletEl) walletEl.innerText = '₹' + userData.wallet;
  if (profitEl) profitEl.innerText = '₹' + userData.profit;
  if (packageEl) packageEl.innerText = userData.package;

  // Services definitions
  const services = [
    {id:'AEPS', label:'AEPS', icon:'fa-solid fa-fingerprint'},
    {id:'DMT', label:'Money Transfer', icon:'fa-solid fa-money-bill-transfer'},
    {id:'Quick', label:'Quick Transfer', icon:'fa-solid fa-bolt'},
    {id:'BBPS', label:'BBPS', icon:'fa-solid fa-file-invoice'},
    {id:'Payout', label:'Payout', icon:'fa-solid fa-hand-holding-dollar'},
    {id:'Recharge', label:'Recharge', icon:'fa-solid fa-mobile-screen'},
    {id:'UTI', label:'UTI Service', icon:'fa-solid fa-clock'},
    {id:'Fastag', label:'Fastag Service', icon:'fa-solid fa-bus-simple'},
    {id:'DTH', label:'DTH', icon:'fa-solid fa-tv'},
    {id:'BBPS2', label:'Bill Pay', icon:'fa-solid fa-file-invoice-dollar'},
    {id:'Insurance', label:'Insurance', icon:'fa-solid fa-shield-alt'},
    {id:'Investment', label:'Investment', icon:'fa-solid fa-piggy-bank'}
  ];

  // Render services: show only first N by default
  const servicesGrid = document.getElementById('servicesGrid');
  const VISIBLE_COUNT = 4;
  if (servicesGrid){
    servicesGrid.innerHTML = '';
    // ensure not showing extras by default
    servicesGrid.classList.remove('show-all');
    services.forEach((s, idx) => {
      const card = document.createElement('div');
      card.className = 'service-card' + (idx >= VISIBLE_COUNT ? ' extra' : '');
      card.innerHTML = `
        <div class="service-icon"><i class="${s.icon}"></i></div>
        <div class="service-label">${s.label}</div>
      `;
      card.addEventListener('click', () => {
        alert(s.label + ' clicked');
      });
      servicesGrid.appendChild(card);
    });
  }

  // View More toggle
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  function toggleExtras() {
    if (!servicesGrid) return;
    const showing = servicesGrid.classList.toggle('show-all');
    const btn = document.getElementById('viewMoreBtn');
    if (btn) btn.textContent = showing ? 'View Less ▴' : 'View More ▾';
  }

  // expose for inline fallback
  window.toggleDashboardServices = toggleExtras;

  if (servicesGrid) {
    // set initial label
    const btn = document.getElementById('viewMoreBtn');
    if (btn) btn.textContent = 'View More ▾';
  }

  if (viewMoreBtn && servicesGrid){
    viewMoreBtn.addEventListener('click', toggleExtras);
  } else {
    // delegation fallback: catch clicks on the document (handles timing issues)
    document.addEventListener('click', function(e){
      const target = e.target.closest && e.target.closest('#viewMoreBtn');
      if (target && servicesGrid) toggleExtras();
    });
  }

})();
