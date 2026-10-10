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

  /**
   * Sprawdza adres wpisany do formularza bez wysyłania żadnych danych.
   * Funkcja jest też dostępna jako window.InteraktNewsletter.isValidEmail.
   */
  function isValidEmail(email) {
    return typeof email === 'string' && emailPattern.test(email.trim());
  }

  function setNewsletterMessage(form, message, state = '') {
    const status = form.querySelector('[data-newsletter-status]');
    if (!status) return;

    status.textContent = message;
    status.dataset.state = state;
  }

  function setEmailValidity(form) {
    const email = form.querySelector('input[type="email"]');
    if (!email) return false;

    const valid = isValidEmail(email.value) && email.checkValidity();
    email.setAttribute('aria-invalid', String(!valid && email.value.length > 0));
    return valid;
  }

  function initialiseMailerLiteForm(form) {
    const email = form.querySelector('input[type="email"]');
    if (!email) return;

    const action = form.dataset.mailerliteAction?.trim();
    if (action) form.action = action;

    email.addEventListener('input', () => {
      if (!email.value) {
        email.removeAttribute('aria-invalid');
        setNewsletterMessage(form, '');
        return;
      }

      const emailIsValid = setEmailValidity(form);
      setNewsletterMessage(
        form,
        emailIsValid ? '' : form.dataset.invalidEmailMessage,
        emailIsValid ? '' : 'error'
      );
    });

    form.addEventListener('submit', (event) => {
      if (!setEmailValidity(form)) {
        event.preventDefault();
        email.focus();
        setNewsletterMessage(form, form.dataset.invalidEmailMessage, 'error');
        return;
      }

      if (!form.action || form.action === location.href) {
        event.preventDefault();
        setNewsletterMessage(form, form.dataset.notConfiguredMessage, 'info');
      }
    });
  }

  document.querySelectorAll('[data-newsletter-form]').forEach(initialiseMailerLiteForm);
  window.InteraktNewsletter = { isValidEmail, initialiseMailerLiteForm };
})();
