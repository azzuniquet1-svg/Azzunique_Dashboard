document.addEventListener("DOMContentLoaded", function() {

  // ---------------------------
  // Detect page from URL hash
  // ---------------------------
  let pageToLoad = 'dashboard'; // Default page
  if (window.location.hash) {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      pageToLoad = hash;
      console.log('Page detected from URL hash:', pageToLoad);
    }
  }

  // ---------------------------
  // Load Sidebar
  // ---------------------------
  fetch("../components/sidebar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("sidebar-container").innerHTML = data;

      // Highlight active nav item based on URL
      setActiveNav(pageToLoad);
      // Load the page based on URL
      loadPage(pageToLoad);
    });

  // ---------------------------
  // Load Topbar
  // ---------------------------
  fetch("../components/topbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("topbar-container").innerHTML = data;

      if (typeof initializeTopbar === "function") {
        initializeTopbar();
      }
    });

  // ---------------------------
  // Function to load page content dynamically
  // ---------------------------
  function loadPage(pageName) {
    console.log('loadPage called with:', pageName);

    window.location.hash = pageName;

    if (pageName === 'signIn') {
        window.location.href = 'signIn.html';
        return;
    }

    const url = `pages/${pageName}.html`;

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.text();
        })
        .then(html => {
            document.getElementById('page-content').innerHTML = html;

            /* ============================
               LOAD PAGE SPECIFIC CSS
            ============================ */
            const oldCSS = document.getElementById('page-css');
            if (oldCSS) oldCSS.remove();

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `../css/${pageName}.css`;
            link.id = 'page-css';
            document.head.appendChild(link);

            /* ============================
               LOAD PAGE SPECIFIC JS
            ============================ */
            const oldScript = document.getElementById('page-js');
            if (oldScript) oldScript.remove();

            const script = document.createElement('script');
            script.src = `../javascript/${pageName}.js`;
            script.id = 'page-js';
            document.body.appendChild(script);

            setActiveNav(pageName);
        })
        .catch(err => {
            console.error('Error loading page:', err);
            document.getElementById('page-content').innerHTML = '<p>Error loading page</p>';
        });
}


  // ---------------------------
  // Highlight active nav link
  // ---------------------------
  function setActiveNav(pageName) {
      document.querySelectorAll('.nav-link').forEach(link => {
          if (link.dataset.page === pageName) {
              link.classList.add('active');
          } else {
              link.classList.remove('active');
          }
      });
  }

  // ---------------------------
  // Handle clicks on sidebar navigation
  // ---------------------------
  document.addEventListener('click', function(e) {
      const navLink = e.target.closest('.nav-link');
      if (navLink) {
          e.preventDefault();
          e.stopPropagation();
          const page = navLink.getAttribute('data-page');
        const user = navLink.dataset.user;
        if (user) sessionStorage.setItem('selectedUser', user);
          console.log('Clicked page:', page);
          loadPage(page);
          return false;
      }
      
      // Also handle old-style href links from page content
      const link = e.target.closest('a[href*="/html/"]');
      if (link && !link.classList.contains('nav-link')) {
          const href = link.getAttribute('href');
          // Extract page name from href like "../html/addNewUser.html" or "addNewUser"
          const match = href.match(/([a-zA-Z]+)\.html$/);
          if (match) {
              e.preventDefault();
              console.log('Old-style link clicked, loading page:', match[1]);
              loadPage(match[1]);
              return false;
          }
      }
  }, true);
  
  // Also handle on keydown for Enter key
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
          const navLink = e.target.closest('.nav-link');
          if (navLink) {
              e.preventDefault();
              const page = navLink.getAttribute('data-page');
              loadPage(page);
              return false;
          }
      }
  });

  // ---------------------------
  // Handle hash changes (browser back/forward buttons and manual URL changes)
  // ---------------------------
  window.addEventListener('hashchange', function() {
      const newPage = window.location.hash.replace('#', '') || 'dashboard';
      console.log('Hash changed to:', newPage);
      loadPage(newPage);
  });
  // ---------------------------
  // Load initial page based on URL hash or default to dashboard
  // ---------------------------
  const initialPage = window.location.hash.replace('#', '') || pageToLoad;
  loadPage(initialPage);

});