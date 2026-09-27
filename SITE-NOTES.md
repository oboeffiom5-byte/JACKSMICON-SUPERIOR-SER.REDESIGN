# Site handoff notes

## What changed

- Redesigned the five existing pages: `index.html`, `about.html`, `service.html`, `project.html`, and `contact.html`.
- Replaced the crowded dark styling with a restrained architectural palette: warm ivory, charcoal, and a small brass accent.
- Reworked navigation, spacing, headings, card layouts, calls to action, portfolio gallery, footer, metadata, alt text and mobile breakpoints.
- Kept the implementation plain HTML and CSS. `script.js` remains a small, readable enhancement for the existing mobile navigation only.
- Preserved the useful company introduction, actual service list, founder information, construction values and FAQs. Removed lorem ipsum, missing-image references, the unrelated personal-portfolio contact information, and unverified client quotes.
- Project-gallery captions describe what can be seen in the photos; they do not invent project names, budgets, dates, or outcomes.

## Existing image files retained

All original image files remain in the source folder. The redesign uses the relevant originals, including:

- `jackslogo.jpg` — company logo
- `build.jpg`, `const.jpg`, `finish.jpg`, `project.jpg`, `main.jpg`, `room.jpg`, `deck.jpg` — building and construction imagery
- `design.png` — architectural concept rendering
- `manager.jpg`, `engr.jpg` — team and site-work imagery
- `founder.jpg` — founder portrait

Other supplied originals were left in the project folder as well. The unrelated `asake.jpg` poster was not placed in company project cards.

## Added image

- `assets/interior-finishing-illustrative.jpg` — AI-generated illustrative interior image for the interior-finishing service card. It is explicitly labelled as illustrative and not as a JASMICON project.

**Exact image prompt used:**

> Create a photorealistic architectural interior photograph for the interior-finishing service section of a premium Nigerian construction and project-management company website. Show a refined contemporary residential living room in Lagos/Nigeria with carefully finished warm ivory plaster walls, natural walnut joinery, polished light-stone floor, muted sand and charcoal furnishings, a few tasteful green plants, broad daylight from tall windows, crisp construction detailing and excellent craftsmanship. Editorial real-estate photography, natural balanced exposure, premium but attainable, clean straight lines, subtle warm sunlight, realistic materials and scale, wide horizontal composition with the room as the subject. No people, no words, no text, no logo, no watermark, no collage, no exaggerated luxury, no fantasy architecture.

## Replace before launch

- **Contact form endpoint:** In `contact.html`, replace the `action="YOUR_FORM_ENDPOINT_HERE"` value with the real Formspree (or compatible HTML `POST`) endpoint. The HTML comment above the form identifies the exact field.
- **Newsletter endpoint:** Replace `action="YOUR_EMAIL_FORM_ENDPOINT_HERE"` in the footer form on each of the five pages with the endpoint from a newsletter/form provider. This is separate from the contact-form endpoint unless the selected provider is configured to accept both.
- **Company details:** The displayed contact information is drawn from the original site: phone **+234 816 201 2779**, email **Jacksmicon0@gmail.com**, location **8 Miles**, and website **www.jacksmiconsuperiorservices.com**. Update any value that has changed.
- **Social profiles:** Supply official company URLs if these should be included. The previous page had empty links and developer/personal-looking profile URLs, which were not repeated.

## Publish note

These files are a local working copy of the public GitHub Pages source; the GitHub repository and its live website were not changed or published as part of this handoff. After you have configured the form endpoints and reviewed the contact details, copy the updated files to the repository and publish through your normal GitHub Pages workflow.
