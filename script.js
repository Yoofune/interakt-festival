/*
 * Interakcje strony. Teksty i struktura każdej podstrony znajdują się w plikach HTML.
 * Nie wpisuj klucza API MailerLite do tego pliku ani bezpośrednio na stronę.
 */

(() => {
  const menuColors = ['#dbeff2', '#ff92f6', '#33ff00'];

  document.querySelectorAll('[data-home-menu-link]').forEach((link) => {
    const chooseColor = () => {
      const color = menuColors[Math.floor(Math.random() * menuColors.length)];
      link.style.setProperty('--hover-color', color);
    };

    link.addEventListener('mouseenter', chooseColor);
    link.addEventListener('focus', chooseColor);
  });

  document.querySelector('[data-back-button]')?.addEventListener('click', () => {
    const fallbackUrl = document.body.dataset.homeUrl || './index.html';
    const cameFromSameSite = document.referrer && new URL(document.referrer).origin === location.origin;

    if (cameFromSameSite) {
      history.back();
      return;
    }

    location.assign(fallbackUrl);
  });

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
})();
