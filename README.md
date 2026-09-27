# JACKSMICON SUPERIOR SERVICES website

This is the refreshed version of the existing static website. It stays with readable HTML, CSS and a small amount of existing JavaScript for the mobile navigation—no framework or build step is required.

## Pages

- `index.html` — home
- `about.html` — company and founder
- `service.html` — services and FAQs
- `project.html` — image gallery
- `contact.html` — company contact details and enquiry form

All pages share `style.css` and `script.js`. Original JASMICON/JACKSMICON photo files are kept in the project root; the additional illustrative interior visual is in `assets/`.

## Preview locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Before publishing

1. In `contact.html`, replace `YOUR_FORM_ENDPOINT_HERE` with the real endpoint from Formspree or another service that accepts plain HTML `POST` forms.
2. In the newsletter forms in all five HTML pages, replace `YOUR_EMAIL_FORM_ENDPOINT_HERE` with the newsletter provider's real `POST` endpoint. Each page has a nearby HTML comment.
3. Confirm the company phone, email, location and website shown in the footer/contact page are still current. These were taken from the original website: **+234 816 201 2779**, **Jacksmicon0@gmail.com**, **8 Miles**, and **www.jacksmiconsuperiorservices.com**.
4. Add official social links if desired. The original social links were blank or pointed to accounts that appeared unrelated to the company, so they were not carried into the redesign.

The contact and newsletter forms are deliberately not connected to a made-up address or endpoint. They will need those provider URLs before they can deliver submissions.

See [SITE-NOTES.md](SITE-NOTES.md) for the image inventory and exact prompt used for the new illustrative image.
