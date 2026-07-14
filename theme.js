const themeToggles = document.querySelectorAll('[data-theme-toggle]');

function setDarkMode(enabled) {
  document.body.classList.toggle('dark-mode', enabled);
  themeToggles.forEach(toggle => {
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.querySelector('.theme-toggle-label').textContent = enabled ? 'Hell' : 'Dunkel';
    toggle.setAttribute('aria-label', enabled ? 'Helles Design aktivieren' : 'Dunkles Design aktivieren');
  });
}

themeToggles.forEach(toggle => {
  toggle.addEventListener('click', () => setDarkMode(!document.body.classList.contains('dark-mode')));
});
