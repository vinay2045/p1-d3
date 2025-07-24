const sidebarBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".side-bar");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});
