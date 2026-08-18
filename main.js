/* =========================================================
   MIEL & Crumb Bakery — main.js
   Part 1 scope: HTML structure and basic content only.
   Full interactivity (form validation, gallery, menu filters)
   is implemented in Part 3 — Functionality & Submission.
   ========================================================= */

// Marks the current page's nav link as active (small, safe UX touch
// that doesn't count as "functionality" in the Part 3 sense).
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });
});
