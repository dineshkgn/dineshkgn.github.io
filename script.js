document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav");

btn?.addEventListener("click", () => {
  const isOpen = nav.style.display === "flex";
  nav.style.display = isOpen ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.gap = "12px";
  nav.style.position = "absolute";
  nav.style.right = "4%";
  nav.style.top = "70px";
  nav.style.padding = "14px";
  nav.style.border = "1px solid rgba(255,255,255,.10)";
  nav.style.borderRadius = "14px";
  nav.style.background = "rgba(17,23,42,.95)";
});
