# Purrrfect Sitting by Shivonne — website

Static HTML site. No build step, no dependencies. Open `index.html` in a browser to preview locally.

## Files

```
index.html          Home
about.html          About Shivonne
services.html       What a visit includes
prices.html         Prices
areas.html          Areas covered
availability.html   Availability calendar
testimonials.html   Reviews
gallery.html        Photos
css/style.css       All styling (brand colours are the variables at the top)
js/site.js          Mobile menu + scroll reveals
js/availability.js  Booked dates — the one file you'll edit regularly
assets/             Logo, cat mark, favicons
CNAME               Custom domain for GitHub Pages
robots.txt
```

## Things to change before it goes live

Search the files for `EDIT` — every placeholder is flagged with an HTML comment.

1. **WhatsApp number** — every page has `https://wa.me/447XXXXXXXXX`. Replace with the real number in international format, no `+` and no leading zero (e.g. `447700900123`).
2. **Facebook URL** — currently `...id=EDIT`.
3. **Email address** — currently `hello@purrrfectsitting.co.uk`.
4. **Testimonials** — `testimonials.html` and the pull quote on `index.html` use example reviews. Swap in real ones.
5. **Areas** — the list in `areas.html` is a starting guess. Adjust it.
6. **Photos** — put images in `assets/photos/` and uncomment the `<img>` tags in `gallery.html`, `index.html` and `about.html`. Square crops work best in the gallery; portrait crops for the hero and about photos.
7. **Shivonne's story** — the two paragraphs on `about.html` are placeholders written from general context, not her actual words.
8. **Booked dates** — `js/availability.js` contains example bookings. Delete them, add the real ones, and change `LAST_UPDATED` every time.
9. **Cancellation policy / bank holiday rates** — add to `prices.html` if you have them.

## Deploying to GitHub Pages

1. Create a public repo, e.g. `purrrfect-sitting`.
2. Upload everything in this folder to the root of the repo.
3. Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. The site goes live at `https://<username>.github.io/purrrfect-sitting/` within a minute or two.

## Custom domain

The `CNAME` file already contains `purrrfectsitting.co.uk`.

At the domain registrar, add:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | `<username>.github.io.`  |

Then in Settings → Pages, enter the custom domain and tick **Enforce HTTPS** once the certificate is issued (usually under an hour).

*Verify those GitHub IP addresses against GitHub's current Pages documentation before relying on them — they have changed in the past.*

## Changing the brand colours

Everything comes from the CSS variables at the top of `css/style.css`:

```css
--navy:  #2C3E5C;
--peach: #F0A882;
```

## Keeping the calendar current

Open `js/availability.js`, add or remove entries in `BOOKINGS`, and change `LAST_UPDATED`.
You can do this straight from the GitHub website on a phone — open the file, tap the pencil, commit.
The site rebuilds itself within a minute.

Put a monthly reminder in the calendar to check it. A stale availability page does more harm than not having one.
