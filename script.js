/* =========================================================
   Nexus Landing Page - script.js
   Vanilla JavaScript for mobile menu toggle and smooth UX
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // -------------------- Elements --------------------
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link, .mobile-nav__cta");

  // -------------------- Mobile Menu Toggle --------------------
  // Toggles the hamburger icon animation and shows/hides the mobile nav
  function toggleMenu() {
    const isOpen = hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");

    // Update ARIA attribute for accessibility
    hamburger.setAttribute("aria-expanded", isOpen);
  }

  // Close menu (used after clicking a link or resizing)
  function closeMenu() {
    hamburger.classList.remove("active");
    mobileNav.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }

  // Event: Hamburger click
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  // Event: Close menu when a mobile nav link is clicked
  // (improves UX so the menu disappears after navigation)
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Event: Close menu if user resizes to desktop width
  // Prevents the mobile menu from staying open on larger screens
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });

  // Optional: Close menu when clicking outside (nice extra)
  document.addEventListener("click", (e) => {
    const isClickInsideNav = mobileNav.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    if (
      mobileNav.classList.contains("active") &&
      !isClickInsideNav &&
      !isClickOnHamburger
    ) {
      closeMenu();
    }
  });
});
