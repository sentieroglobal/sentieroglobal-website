# Sentiero Global — website source

This is a plain static website: HTML, CSS and a little JavaScript. There is
**no build step** — you can edit any file directly on GitHub (click the
pencil icon on a file, edit, commit) and GitHub Pages will publish the
change automatically within a minute or two. No coding tools, no npm, no
installs.

## How the site is organised

```
index.html                              ← the main Sentiero Global homepage
404.html                                ← shown when a page can't be found

assets/
  css/                                   ← styling (colors, fonts, layout)
  js/main.js                             ← menu, dropdowns, FAQ, gallery behaviour

Sentiero_Global_Education/               ← the Education division (13 pages)
Sentiero_Global_Tours_and_Travels/       ← the Tours & Travels division
  Germany/  Switzerland/  Italy/  France/  Spain/  Austria/  Netherlands/
Sentiero_Global_Visa_Services/           ← the Visa Services division
  Travel_Visa/  Education_Visa/  Work_Visa/  Business_Visa/  Family_Visa/  Visitor_Visa/
Sentiero_Global_Founders/                ← the Founders page

Images/                                  ← every photo, organised by division
  main_page/
  Sentiero_Global_Education/
  Sentiero_Global_Tours_and_Travels/
  Sentiero_Global_Visa_Services/
  Sentiero_Global_Founders/
```

Each folder listed above has its own short `README.md` explaining exactly
which image filenames it expects — open the one for the section you're
updating.

## Editing the homepage

Open `index.html`. The hero text, the four division cards, the "Why
Sentiero Global" section and the final call-to-action are all plain text
inside that one file — change the words between the HTML tags and leave
the tags (`<h1>`, `<p>`, `<a>`, etc.) alone.

## Editing Education

Everything lives in `/Sentiero_Global_Education/` — one HTML file per
page (`services.html`, `application.html`, `contact.html`, and so on).
Open the file for the page you want to change.

## Editing Tours & Travels

The overview page is `/Sentiero_Global_Tours_and_Travels/index.html`.
Each country has its own folder and page, e.g.
`/Sentiero_Global_Tours_and_Travels/Switzerland/index.html`.

**Adding a new country later:** duplicate an existing country folder (e.g.
copy `Switzerland/` and rename it), edit the country name, tagline and
destination list inside `index.html`, then add a card for it on
`/Sentiero_Global_Tours_and_Travels/index.html` and a link in the
navigation dropdown inside `assets/js` is not required — navigation links
live in the HTML `<header>` of each page, generated from the same pattern
used for the existing seven countries.

## Editing Visa Services

The overview page is `/Sentiero_Global_Visa_Services/index.html`. Each
visa category has its own folder, e.g.
`/Sentiero_Global_Visa_Services/Work_Visa/index.html`. Add a new category
the same way as a new country above — duplicate an existing category
folder as your starting template.

## Editing Founders

Everything is in `/Sentiero_Global_Founders/index.html`. Search the file
for `To be added.` — those are the placeholder spots for Aryan's and
Pratyaksh's location, background, about section, areas of experience and
personal statement. Replace the placeholder text directly; there's an
HTML comment just above each one saying exactly what to put there.

## Changing Travel pricing

Open `/Sentiero_Global_Tours_and_Travels/index.html` and search for
`package-price`. You'll find:

```html
<p class="package-price">Starting from &#8377;2,00,000</p>
```

Change the number — nothing else on the page needs to change.

## Replacing images

See the `README.md` inside each `Images/` subfolder for the exact
filenames each page expects. In short: add a photo with the exact
filename shown, and it will appear automatically — no code changes
needed. Until a photo is added, that spot shows a neat placeholder
instead of a broken image icon.

## Updating contact information

The phone/WhatsApp numbers shown in the footer of every page, and on the
Education contact page, are set in:

- `assets/js` is **not** where contact details live — they're plain text/HTML,
  so search for the phone number itself (e.g. `+91 89490 12489`) across the
  relevant file and replace it.
- The footer contact block appears identically on every page (it's simply
  copied into each page's HTML) — if you change a number, search your
  editor across the whole repository for the old number to catch every
  page it appears on.

## A few things worth knowing

- Internal links use **relative paths** (like `../index.html`) so the
  site works correctly on GitHub Pages regardless of domain. If you move
  a file to a different folder, its links to other pages will need
  updating.
- Visa pages intentionally never promise a guaranteed outcome — please
  keep that disclaimer language when editing visa content.
- Founder details, phone numbers, addresses, awards, testimonials and
  similar claims should only ever reflect real, confirmed information.
  Placeholders are marked clearly in the HTML with `<!-- ... -->` comments
  — please don't remove a placeholder without replacing it with a real
  fact.
