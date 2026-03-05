function toggleMenu(element){

  const parentItem = element.parentElement;
  const submenu = parentItem.querySelector(".submenu");
  const arrow = element.querySelector(".arrow");

  // Close other dropdowns
  document.querySelectorAll(".submenu").forEach(menu => {
    if(menu !== submenu){
      menu.classList.remove("show");
    }
  });

  document.querySelectorAll(".arrow").forEach(arr => {
    if(arr !== arrow){
      arr.classList.remove("rotate");
    }
  });

  submenu.classList.toggle("show");
  arrow.classList.toggle("rotate");
}
