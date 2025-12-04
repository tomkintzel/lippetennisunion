# Anwenderdokumentation für Redakteure

Diese Dokumentation erklärt, wie Redakteure die Inhalte und Einstellungen der Lippe Tennis Union Website verwalten können.

## Übersicht
Die Website basiert auf Strapi (Backend) und Nuxt (Frontend). Inhalte, Seiten, Events, Partner und Einstellungen werden im Strapi-Adminbereich gepflegt und erscheinen automatisch auf der Website.

---

## 1. Login & Zugang
- Melden Sie sich im Strapi-Adminbereich an (URL erhalten Sie vom Administrator).
- Nach dem Login sehen Sie die verschiedenen Content-Typen und Einstellungen.

---

## 2. Seiten verwalten
- **Seiten** finden Sie unter "Seiten" (Content-Type: `page`).
- Jede Seite hat einen Titel, einen Slug (URL) und einen Inhaltsbereich (Dynamic Zone).
- Im Inhaltsbereich können Sie verschiedene Blöcke hinzufügen:
  - Hero (Titel, Bild, Button)
  - Textabschnitt
  - Events-Block (automatische Event-Liste)
  - Partner-Block (automatische Partner-Liste)
  - News-Block
  - Button
  - Content (Richtext, Listen, Bilder, Links, Code)
- Die Reihenfolge der Blöcke bestimmt die Darstellung auf der Website.

---

## 3. Events verwalten
- **Events** finden Sie unter "Events".
- Jedes Event hat:
  - Titel
  - Beschreibung
  - Start- und Enddatum
  - Bild/Poster
- Events erscheinen automatisch im Event-Bereich der Startseite und auf Event-Seiten.

---

## 4. Partner verwalten
- **Partner** finden Sie unter "Partner".
- Jeder Partner hat:
  - Titel
  - Beschreibung
  - Logo/Bild
  - Link (optional)
- Partner werden im Partner-Bereich der Startseite und auf Partner-Seiten angezeigt.

---

## 5. News/Beiträge verwalten
- **Beiträge** finden Sie unter "Beiträge".
- Jeder Beitrag hat:
  - Titel
  - Slug (URL)
  - Inhalt (Dynamic Zone mit Blöcken)
- Beiträge erscheinen im News-Bereich und auf eigenen Seiten.

---

## 6. Einstellungen (Footer, Kontakt, Name, E-Mail)
- **Einstellungen** finden Sie unter "Einstellungen" (Content-Type: `setting`).
- Hier können Sie den Vereinsnamen, die Kontakt-E-Mail und das Logo für den Footer ändern.

---

## 7. Menü & Navigation
- **Menü** finden Sie unter "Menu".
- Menüeinträge können auf Seiten, externe Links oder Beiträge verweisen.
- Die Reihenfolge bestimmt die Navigation auf der Website.

---

## 8. Medien & Uploads
- Bilder, PDFs und andere Dateien können im "Medien"-Bereich hochgeladen und in den jeweiligen Content-Typen verwendet werden.

---

## 9. Vorschau & Veröffentlichung
- Änderungen können als Entwurf gespeichert oder veröffentlicht werden.
- Nach Veröffentlichung sind die Inhalte sofort auf der Website sichtbar.

---

## 10. Tipps
- Nutzen Sie die Dynamic Zone, um flexible und abwechslungsreiche Seiten zu gestalten.
- Achten Sie auf die Reihenfolge der Blöcke.
- Bilder sollten möglichst im Querformat und optimiert hochgeladen werden.
- Bei Fragen wenden Sie sich an den Administrator.

---

## 11. Technische Hinweise
- Die Website ist modular aufgebaut. Neue Blöcke können vom Entwickler hinzugefügt werden.
- Änderungen im Backend (Strapi) wirken sich direkt auf das Frontend (Nuxt) aus.

---

## Kontakt
Bei Problemen oder Fragen wenden Sie sich bitte an den technischen Ansprechpartner oder Administrator.

---

*Letzte Aktualisierung: 04.12.2025*
