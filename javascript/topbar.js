function initializeTopbar() {

  const notificationBtn = document.getElementById("notificationBtn");
  const profileBtn = document.getElementById("profileBtn");
  const notificationDropdown = document.getElementById("notificationDropdown");
  const profileDropdown = document.getElementById("profileDropdown");
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.querySelector(".sidebar");
  // ===== Hamburger Toggle =====
  if (menuToggle) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      if (sidebar) sidebar.classList.toggle("active");
    });
  }

  // ===== Notification Click =====
  if (notificationBtn && notificationDropdown) {
    notificationBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      notificationDropdown.classList.toggle("show");
      if (profileDropdown) profileDropdown.classList.remove("show");
    });
  }

  // ===== Profile Click =====
  if (profileBtn && profileDropdown) {
    profileBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      profileDropdown.classList.toggle("show");
      if (notificationDropdown) notificationDropdown.classList.remove("show");
    });
  }

  // ===== Click Outside =====
  document.addEventListener("click", function (e) {

    // Close dropdowns
    notificationDropdown.classList.remove("show");
    profileDropdown.classList.remove("show");

    // Close sidebar on mobile
    if (
      window.innerWidth <= 768 &&
      sidebar?.classList.contains("active") &&
      !e.target.closest(".sidebar")
    ) {
      sidebar.classList.remove("active");
    }

  });

}
