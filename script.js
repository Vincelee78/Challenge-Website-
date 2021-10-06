let mainNav = document.getElementById("js-menu");
let navBar = document.getElementById("navbar")
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
mainNav.classList.toggle("active");
  navBar.classList.toggle("expanded");
});

// setInterval(function() {
//   window.location.reload();
// }, 300000); 