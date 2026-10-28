# stepisle.de

Offizielle Website von StepIsle, dem gemütlichen Inselspiel für das iPhone. Eine statische Seite ohne Build-Schritt,
ohne Framework und ohne Abhängigkeiten, gehostet mit GitHub Pages.

| Pfad | Inhalt |
|---|---|
| `index.html`, `en/index.html` | Startseite Deutsch / Englisch |
| `impressum/`, `en/legal-notice/` | Impressum |
| `datenschutz/`, `en/privacy/` | Datenschutzerklärung |
| `assets/style.css` | Aussehen – Farben aus der App (`UI/Theme.swift`), Schriftzug Roboto Slab 900 |
| `assets/config.js` | **Link zum App Store** – nur hier eintragen; solange leer, steht „Bald im App Store“ |
| `CNAME` | Domain für GitHub Pages |

Lokal ansehen: `python3 -m http.server 8765`, dann http://localhost:8765 öffnen.

## Veröffentlichen

1. *Settings* → *Pages* → *Source*: **Deploy from a branch**, Branch `main`, Ordner `/ (root)`. Jeder Push auf `main`
   ist danach automatisch online.
2. Die Domain steht in `CNAME` (`stepisle.de`). Unter *Settings* → *Pages* erscheint sie als *Custom domain*; sobald das
   DNS stimmt, *Enforce HTTPS* aktivieren.
3. DNS beim Domain-Anbieter für `stepisle.de`: A-Einträge auf `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153`, für `www` ein CNAME auf `moritzst4.github.io`. Am besten vorher die Domain unter GitHub →
   *Settings* (Konto) → *Pages* verifizieren.
4. `stepisle.com` beim Anbieter per Weiterleitung (301) auf `https://stepisle.de` zeigen lassen – GitHub Pages bedient
   nur eine Domain je Seite.

Soll `stepisle.com` die Hauptdomain werden: `CNAME` ändern, in allen HTML-Dateien `https://stepisle.de` ersetzen
(Canonical, Sprachversionen, Vorschaubild) und in Schritt 3 und 4 die Domains tauschen.

## Pflege

- Ändert sich, welche Daten die App verschickt (CloudKit, Apple Health, neue Dienste), die Datenschutzerklärung in
  beiden Sprachen anpassen und das Datum „Stand“ aktualisieren.
- Datenschutz-URL für App Store Connect: `https://stepisle.de/en/privacy/` (Deutsch: `/datenschutz/`).
- Das App-Store-Badge ist Apples offizielles Badge und darf nicht verändert werden.
- Bilder: Insel aus dem Ladebild der App, Screenshots aus `assets_stepIsle/Appstore/Screenshots` (nur der Bildschirm).
