# INTER:AKT Festival — pliki strony

To jest statyczna strona HTML, gotowa do otwarcia w przeglądarce lub opublikowania na hostingu statycznym.

## Gdzie edytować treści

- Strony po polsku znajdują się w katalogu głównym (np. `program.html`, `kontakt.html`).
- Angielskie odpowiedniki tych samych stron są w katalogu `en/`.
- Każdy plik zawiera własną, widoczną treść. Teksty nie są generowane przez JavaScript.
- Wspólne style są w `styles.css`.
- `script.js` zawiera wyłącznie interakcje: animację menu, przycisk „Wstecz” oraz sprawdzanie adresu e-mail.
- Logotyp w nagłówku to `assets/interakt-logo.png`. Można go podmienić, zachowując tę samą nazwę pliku.

## Newsletter MailerLite

Na obu stronach głównych znajduje się gotowy formularz z walidacją adresu e-mail. Dopóki nie skonfigurujesz MailerLite, formularz nie wysyła danych.

1. W MailerLite utwórz formularz **Embedded form**.
2. W widoku formularza przejdź do jego kodu osadzania (Embed form).
3. Jeśli dostaniesz bezpośredni adres formularza, wpisz go do atrybutu `data-mailerlite-action=""` w formularzu na stronach `index.html` oraz `en/index.html`.
4. Jeśli MailerLite poda własny kompletny kod osadzania, użyj go zamiast obecnego znacznika `<form …>` na obu stronach głównych. Ich uniwersalny skrypt należy umieścić w sekcji `<head>` wszystkich stron, zgodnie z instrukcją MailerLite.

Nie wklejaj klucza API MailerLite do pliku HTML ani JavaScript — byłby publicznie dostępny.

## Pozostałe miejsca do podmiany

- Na stronach `program.html` oraz `en/program.html` zamień placeholder `iframe` na adres osadzania kalendarza Google.
- Uzupełnij adresy przycisków Facebook, Instagram i TikTok.
- Zastąp tekstowe boksy partnerów w stopce właściwymi plikami logotypów.
