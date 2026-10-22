document.addEventListener("DOMContentLoaded", () => {
  const contactLinks = document.querySelectorAll(
    '.page-contact a[href="#contact-details"]'
  );

  contactLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.getElementById("contact-details");

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start"
      });

      history.replaceState(null, "", "#contact-details");
    });
  });

  const socialLinks = document.querySelectorAll(
    ".contact-social__link"
  );

  socialLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = link.getAttribute("href");

      if (!url || url === "#") {
        event.preventDefault();
        console.info(
          "Replace this placeholder with the real contact URL:",
          link.getAttribute("aria-label")
        );
      }
    });
  });
});
