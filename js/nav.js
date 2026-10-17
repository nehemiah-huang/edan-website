// Ɛdan nav enhancements. Load after script.js.
// script.js already handles the open/close toggle and the scrolled state.
(() => {
  const links = document.getElementById('navLinks');
  const toggle = document.getElementById('navToggle');
  if (!links || !toggle) return;

  // mark the link for the current page (ignores #anchor links like index.html#why)
  const here = location.pathname.split('/').pop() || 'index.html';
  links.querySelectorAll('a').forEach(a => {
    const url = new URL(a.getAttribute('href'), location.href);
    const file = url.pathname.split('/').pop() || 'index.html';
    if (!url.hash && file === here) a.setAttribute('aria-current', 'page');
  });

  // Escape closes the mobile menu and returns focus to the button
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      toggle.click();
      toggle.focus();
    }
  });
})();
