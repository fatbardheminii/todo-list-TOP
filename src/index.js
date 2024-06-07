import './style.css'
console.log("hii");

(function getActualYear() {
  const spanYear = document.querySelector(".year");
  spanYear.textContent = new Date().getFullYear();
})();
