// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#tipe-obat").onclick = () => {
  navbarNav.classList.toggle("active");
};

const obat = document.querySelector("#tipe-obat");

document.addEventListener("click", function (e) {
  if (!obat.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
