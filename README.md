# Figma Landing - Dev Version

## Struktura projektu

```
figma-project/
├── package.json          # Zależności i skrypty
├── tailwind.config.js    # Konfiguracja Tailwind (kolory, fonty, gradienty)
├── src/
│   └── input.css         # Źródłowe style + komponenty
├── dist/
│   └── output.css        # Skompilowany CSS (ten ładujesz na stronie)
├── assets/               # Tutaj wrzucaj obrazki, fonty itp.
└── index.html            # Strona preview z komponentami
```

## Szybki start

1. **Zainstaluj zależności:**

   ```bash
   npm install
   ```

2. **Uruchom tryb watch (development):**

   ```bash
   npm run dev
   ```

   Tailwind będzie automatycznie kompilował CSS przy każdej zmianie.

3. **Zbuduj produkcyjną wersję:**
   ```bash
   npm run build
   ```

## Zdefiniowane kolory

| Nazwa      | Klasa Tailwind                     | HEX     |
| ---------- | ---------------------------------- | ------- |
| Yellow 500 | `bg-yellow-500`, `text-yellow-500` | #FDD80A |
| Purple 500 | `bg-purple-500`, `text-purple-500` | #F02F8D |
| Violet 500 | `bg-violet-500`, `text-violet-500` | #B700FF |
| Dark 900   | `bg-dark-900`                      | #0D0D0D |
| Dark 800   | `bg-dark-800`                      | #1A1A1A |
| Dark 700   | `bg-dark-700`                      | #2D2D2D |

## Gradienty

```html
<!-- Gradient jako tło -->
<div class="bg-gradient-main">...</div>
<div class="bg-gradient-main-horizontal">...</div>
<div class="bg-gradient-main-vertical">...</div>

<!-- Gradient text -->
<span class="text-gradient">Kolorowy tekst</span>
```

## Gotowe komponenty (CSS)

```html
<!-- Przycisk z gradient border -->
<button class="btn-gradient-border">Click me</button>

<!-- Przycisk solid gradient -->
<button class="btn-gradient-solid">Click me</button>

<!-- Karta z gradient border -->
<div class="card-gradient-border p-6">Content</div>

<!-- Dekoracyjny kwadrat -->
<span class="gradient-square"></span>

<!-- Container sekcji -->
<div class="section-container">...</div>
```

## Fonty

Projekt jest skonfigurowany na:

- **Proxima Nova** - tekst podstawowy (font-sans)
- **All Round Gothic** - nagłówki (font-heading)
