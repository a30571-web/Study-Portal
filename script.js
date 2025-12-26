function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Lógica para abrir os submenus (Anos e Consolas)
document.querySelectorAll(".dropdown-btn, .sub-dropdown-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    this.classList.toggle("active");
    var container = this.nextElementSibling;
    if (container.style.display === "block") {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }
  });
});

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const btn = document.getElementById("theme-toggle");
  btn.innerHTML = document.body.classList.contains("dark-theme") ? "☀️ Light Mode" : "🌙 Dark Mode";
}
