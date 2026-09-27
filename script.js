// The mobile menu is the only interactive feature that needs JavaScript.
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navbar && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      navbar.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}
