# Updating the website

No coding required. Everything below is done in a browser — phone or laptop.

---

## One-time setup

1. Create a free account at **github.com**.
2. Click **+** (top right) → **New repository**. Name it `purrrfect-sitting`, set it to **Public**, click **Create repository**.
3. On the next screen click **uploading an existing file**.
4. Unzip the website folder on your computer, then drag **everything inside it** (not the folder itself) into the browser window. Wait for the upload to finish, then click **Commit changes**.
5. Go to **Settings** → **Pages** (left-hand menu). Under *Source* choose **Deploy from a branch**, branch **main**, folder **/ (root)**. Click **Save**.
6. Wait two minutes. The site is live at `https://yourusername.github.io/purrrfect-sitting/`.

Step 4 is the only fiddly part, and you only ever do it once.

---

## Adding photos

The site is already looking for photos with specific names. Give a photo the right name, upload it, and it appears. No code to touch.

| Where it appears | Name the file |
|---|---|
| Home page, main image | `hero.jpg` |
| Home page, "how it works" | `meet-greet.jpg` |
| About page | `shivonne.jpg` |
| Gallery, nine tiles | `01.jpg` through `09.jpg` |

**Steps:**

1. Resize the photo first. Straight off a phone it's 3–5MB and will make the site slow. Go to **squoosh.app**, drop the photo in, drag the quality slider until it says under 400KB, download.
2. Rename it to one of the names in the table above. Lowercase, `.jpg`.
3. On GitHub, click into `assets` → `photos`.
4. **Add file** → **Upload files** → drag it in → **Commit changes**.
5. Wait a minute, then reload the site.

Any slot without a photo just shows the peach placeholder, so you can add them one at a time as you get good shots. To replace a photo later, upload a new one with the same name — it overwrites the old one.

**Portrait crops** for hero, meet-greet and shivonne. **Square crops** for the gallery.

---

## Updating the availability calendar

1. On GitHub, click `js` → `availability.js`.
2. Click the **pencil icon** (top right of the file).
3. Change the two things that matter:

```js
var LAST_UPDATED = '2026-07-28';        // change this EVERY time

var BOOKINGS = [
  { from: '2026-08-08', to: '2026-08-16' },     // a block of dates
  { on:   '2026-08-22', status: 'limited' },    // one date, still room
  { from: '2026-12-21', to: '2027-01-02' }
];
```

4. Click **Commit changes**.

Rules: dates are `YYYY-MM-DD`, every line ends with a comma **except the last one**, and add `status: 'limited'` if you could still fit another household in that day.

If you break it, the calendar area shows a message asking people to get in touch — it won't take the site down. Undo by clicking **History** on the file and reverting.

---

## Changing prices, text or the areas list

1. Find the page: `prices.html`, `areas.html`, `about.html` and so on.
2. Click the **pencil icon**.
3. Use **Ctrl+F** / **Cmd+F** to find the text you want to change.
4. Change **only the words between the `>` and `<` symbols.** For example:

```html
<h3>No carrier, no car journey</h3>
```

Edit `No carrier, no car journey`. Leave `<h3>` and `</h3>` alone.

5. **Commit changes**.

---

## Adding a new testimonial

Open `testimonials.html`, find a block that looks like this, and copy it directly underneath itself, then edit the words:

```html
<div class="quote-card reveal">
  <blockquote>The review text goes here.</blockquote>
  <cite>Sarah<span>Dalmeny &middot; two weeks in Spain</span></cite>
</div>
```

First name and area only. It reads as more trustworthy than a full name.

---

## Five rules that will save you grief

1. **Never rename or move a file.** Renaming `style.css` breaks every page at once.
2. **Change `LAST_UPDATED` every time you touch the calendar.** A stale date is worse than no calendar.
3. **Resize photos before uploading.** Under 400KB.
4. **Wait a minute after committing**, then hard-refresh the page (Ctrl+Shift+R, or pull down to refresh on a phone). GitHub caches for about 60 seconds.
5. **Everything is undoable.** Click **History** on any file and revert. You cannot permanently break this.

---

## Custom domain

Once `purrrfectsitting.co.uk` is bought, at the registrar add:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `yourusername.github.io.` |

Then GitHub → **Settings** → **Pages** → enter the domain → tick **Enforce HTTPS** once it lets you (up to an hour).

*Check those IP addresses against GitHub's current Pages documentation before relying on them — they have changed before.*
