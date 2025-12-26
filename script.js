function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

document.querySelectorAll(".dropdown-btn, .sub-dropdown-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    var container = this.nextElementSibling;
    container.style.display = (container.style.display === "block") ? "none" : "block";
  });
});

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const btn = document.getElementById("theme-toggle");
  btn.innerHTML = document.body.classList.contains("dark-theme") ? "☀️ Light Mode" : "🌙 Dark Mode";
}
