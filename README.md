# INTER:AKT — instrukcja obsługi strony

Ta strona jest zbudowana z prostych plików HTML. Każdy widoczny tekst znajduje się bezpośrednio w plikach strony, więc nie trzeba używać panelu administracyjnego ani znać JavaScriptu, aby go zmienić.

## Zanim zaczniesz

1. Zrób kopię folderu strony albo pobierz aktualną wersję z GitHuba.
2. Edytuj pliki w Visual Studio Code.
3. Po każdej większej zmianie otwórz `index.html` w przeglądarce i sprawdź, czy strona wygląda poprawnie na komputerze oraz telefonie.
4. Nie zmieniaj nazw folderów ani rozszerzeń plików (`.html`, `.jpg`, `.png`, `.pdf`) bez jednoczesnej zmiany linków do nich w kodzie.

> Ważne: hosting rozróżnia wielkość liter. `Martyna_Marciniak.PNG` i `martyna_marciniak.png` to dla niego dwa różne pliki.

## Najważniejsza zasada: polska i angielska wersja

Strona ma dwie osobne wersje językowe. Zmiana w polskim pliku **nie pojawia się automatycznie** po angielsku.

| Wersja polska | Wersja angielska |
| --- | --- |
| `index.html` | `en/index.html` |
| `program.html` | `en/program.html` |
| `artysci.html` | `en/artysci.html` |
| `o-nas.html` | `en/o-nas.html` |
| pozostałe pliki `.html` w katalogu głównym | ich odpowiedniki w folderze `en/` |

Po wprowadzeniu polskiego tekstu otwórz odpowiedni plik w folderze `en/` i dodaj jego tłumaczenie.

## Mapa plików

| Co chcesz zmienić | Gdzie to zrobić |
| --- | --- |
| Strona główna i menu | `index.html` oraz `en/index.html` |
| Aktualności | `aktualnosci.html` oraz `en/aktualnosci.html` |
| Informacje o festiwalu | `interakt-2026.html` oraz `en/interakt-2026.html` |
| Program, kalendarz i pliki do pobrania | `program.html` oraz `en/program.html` |
| Osoby artystyczne | `artysci.html` oraz `en/artysci.html` |
| Open call | `open-call.html` oraz `en/open-call.html` |
| Partnerzy | `partnerzy.html` oraz `en/partnerzy.html` |
| O nas, kontakt i archiwum | odpowiadające im pliki `.html` |
| Wspólny wygląd całej strony | `styles.css` |
| Losowanie kolorów, przycisk „Wstecz” | `script.js` |
| Zdjęcia, logo oraz logotypy | folder `assets/` |
| Zdjęcia osób artystycznych | folder `assets/artysci/` |
| Pliki PDF | folder `files/` |
| Adres własnej domeny | plik `CNAME` — nie usuwaj go |

## Jak bezpiecznie zmieniać tekst

1. Otwórz właściwy plik `.html`.
2. Użyj wyszukiwania (`Ctrl + F`) i wpisz fragment tekstu widocznego na stronie.
3. Zmień tylko tekst **pomiędzy** znacznikami, na przykład:

```html
<p>Ten tekst możesz zmienić.</p>
```

Zostaw znaczniki `<p>`, `</p>`, `<a ...>` i `</a>` na miejscu. To one określają, jak tekst działa i wygląda.

4. Zapisz plik (`Ctrl + S`) i odśwież stronę w przeglądarce.

## Linki

Link w kodzie wygląda tak:

```html
<a href="https://przyklad.pl" target="_blank" rel="noopener noreferrer">Tekst linku ↗</a>
```

- adres po `href="..."` prowadzi do strony lub pliku;
- tekst między `>` i `</a>` jest widoczny dla odbiorcy;
- `target="_blank"` otwiera link w nowej karcie — zostaw go dla stron zewnętrznych i plików PDF.

Przykład podmiany adresu Instagramu:

```html
<a class="social-button" href="https://www.instagram.com/twoj_profil" ...>◎</a>
```

Na TikToku przycisk jest obecnie ukryty. Aby go pokazać, usuń z jego znacznika fragment:

```html
style="visibility: hidden"
```

i wpisz właściwy adres w `href="..."`.

## Zdjęcia i logotypy

### Dodanie lub podmiana zdjęcia

1. Wgraj plik do odpowiedniego folderu, np. zdjęcie osoby artystycznej do `assets/artysci/`.
2. Używaj krótkich nazw bez spacji i polskich znaków, np. `anna-kowalska.jpg`.
3. W kodzie podaj dokładnie tę samą nazwę:

```html
<img src="./assets/artysci/anna-kowalska.jpg" alt="Anna Kowalska">
```

Tekst w `alt="..."` opisuje obraz dla osób korzystających z czytników ekranu. Wpisz tam imię i nazwisko osoby albo nazwę logotypu.

Zdjęcia na stronie osób artystycznych są automatycznie pokazywane jako kwadraty. Większy kadr będzie przycięty, ale zdjęcie nie zostanie rozciągnięte.

### Logo w nagłówku

Plik nagłówka to:

```text
assets/interakt-logo.png
```

Najłatwiej podmienić go, zachowując identyczną nazwę pliku.

### Logotypy w stopce

Stopka jest powtórzona w wielu plikach HTML. Gdy dodasz partnera lub zmienisz jego link, skopiuj gotowy fragment stopki także do pozostałych stron w obu językach.

Logo bez linku:

```html
<div class="partner-logo">
  <img src="./assets/nazwa-logo.png" alt="Nazwa partnera">
</div>
```

Logo prowadzące do strony partnera:

```html
<a class="partner-logo" href="https://partner.pl" target="_blank" rel="noopener noreferrer">
  <img src="./assets/nazwa-logo.png" alt="Nazwa partnera">
</a>
```

## Dodawanie osoby artystycznej

W pliku `artysci.html` znajdź właściwy blok sekcji, np. `ARTIST TALKI`, `WYSTAWY` albo `WARSZTATY`. Skopiuj cały blok od `<article class="artist-card">` do `</article>`, wklej go pod poprzednią osobą i podmień treść.

Podstawowy wzór:

```html
<article class="artist-card">
  <div class="artist-photo">
    <img src="./assets/artysci/imie-nazwisko.jpg" alt="Imię Nazwisko">
  </div>

  <p class="artist-name">Imię Nazwisko</p>

  <p class="artist-bio">
    Krótkie bio osoby artystycznej.
  </p>

  <p class="artist-title"><b>Tytuł wystąpienia lub pracy</b></p>

  <p class="artist-achievements">
    Opis projektu, dorobku lub wydarzenia.
  </p>
</article>
```

Następnie dodaj angielską wersję tej samej osoby w `en/artysci.html`.

## Program, kalendarz i PDF-y

### Kalendarz Google

Kalendarz znajduje się w `program.html` i `en/program.html` jako znacznik zaczynający się od:

```html
<iframe class="calendar-placeholder"
```

Aby podmienić kalendarz, zmień tylko adres po `src="..."`. Nie usuwaj `title`, `loading="lazy"`, klasy ani zamykającego `</iframe>`.

### Dodawanie wydarzenia pod kalendarzem

Wydarzenia są w sekcji:

```html
<section class="programme-details">
```

Skopiuj cały blok:

```html
<section class="programme-event">
  ...
</section>
```

i wklej go pod poprzednim wydarzeniem. Zmieniaj teksty w akapitach `<p>`, a adresy linków w `href="..."`.

### Dodanie PDF-u

1. Wgraj plik do folderu `files/`.
2. Wstaw link, używając dokładnej nazwy pliku:

```html
<a href="./files/nazwa-pliku.pdf" target="_blank" rel="noopener noreferrer">
  Otwórz plik ↗
</a>
```

W folderze są już m.in. `Program_INTER_AKT_2026.pdf`, `Program_filmowy_swiatowid.pdf` i `Open_Call_INTERAKT_Guidelines.pdf`.

## Newsletter MailerLite

Formularz newslettera działa przez MailerLite i jest osadzony na obu stronach głównych:

```html
<div class="ml-embedded" data-form="SXvStZ"></div>
```

- Drobne zmiany treści, pól i komunikatów wprowadzaj w panelu MailerLite.
- Jeśli MailerLite utworzy nowy formularz, podmień wartość `data-form="..."` na identyfikator nowego formularza w `index.html` oraz `en/index.html`.
- Nie wklejaj do strony hasła ani klucza API MailerLite.
- Skrypt MailerLite w sekcji `<head>` powinien pozostać na obu stronach głównych.

## Kolorowe animacje linków

Losowanie koloru przy najechaniu jest obsługiwane przez `script.js`. Aby nowy link korzystał z tej animacji, dodaj do niego atrybut:

```html
data-home-menu-link
```

Przykład:

```html
<a href="https://przyklad.pl" data-home-menu-link>Otwórz stronę ↗</a>
```

Nie trzeba wtedy zmieniać `script.js`.

## Zmiana wyglądu

Większość wyglądu strony znajduje się w `styles.css`. Zanim coś zmienisz:

1. Wyszukaj nazwę klasy z pliku HTML, np. `artist-card` lub `partner-logo`.
2. Zmieniaj jedną wartość naraz i od razu sprawdzaj efekt.
3. Jeśli efekt jest nieprawidłowy, cofnij ostatnią zmianę (`Ctrl + Z`).

Najczęściej przydatne wartości:

- `font-size` — wielkość tekstu;
- `margin` — odstęp na zewnątrz elementu;
- `padding` — odstęp wewnątrz elementu;
- `width` i `height` — szerokość oraz wysokość;
- `background` — kolor tła;
- `color` — kolor tekstu.

Nie usuwaj fragmentów w nawiasach klamrowych `{ ... }`, jeśli nie wiesz, za co odpowiadają.

## Przed publikacją

Sprawdź:

- czy działa wersja polska i angielska;
- czy klikają się wszystkie nowe linki;
- czy zdjęcia i PDF-y otwierają się poprawnie;
- czy nazwy plików w kodzie są identyczne jak w folderach;
- czy strona dobrze wygląda na telefonie;
- czy stopka oraz social media są aktualne.

Jeśli publikujesz przez GitHub Pages, zapisz zmiany, wyślij zmienione pliki do repozytorium i poczekaj kilka minut na automatyczną publikację. Nie usuwaj pliku `CNAME` — jest potrzebny dla domeny `interaktfestival.com`.

## Gdy coś nie działa

| Problem | Najczęstsza przyczyna | Co sprawdzić |
| --- | --- | --- |
| Nie widać zdjęcia | zła ścieżka albo nazwa pliku | porównaj `src="..."` z nazwą w folderze, także wielkość liter |
| Link nie działa | adres wpisany w złym miejscu | upewnij się, że adres jest w `href="..."` |
| Zmiana jest tylko po polsku | nie zmieniono pliku w `en/` | uzupełnij angielski odpowiednik |
| Kalendarz się nie wyświetla | nieprawidłowy adres osadzania | użyj linku „Integruj kalendarz” z Google Calendar |
| Nie widać zmian online | pliki nie zostały opublikowane albo przeglądarka pamięta starą wersję | opublikuj zmiany i odśwież stronę skrótem `Ctrl + F5` |
