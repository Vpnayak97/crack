# CRACK – College Workshop Website

Static responsive website for CRACK, a weekend training startup partnering with colleges (e.g., SMVITM).

## 🚀 Features
- Responsive layout with Inter/Poppins fonts.
- Offline registration + mailto integration.
- Admin CSV export from localStorage.
- Accessible modal forms.
- Course schema (JSON-LD).
- SEO-friendly meta tags and OG images.

## 📊 Connect Registration to Google Sheets
You can replace the `mailto:` with a Google Apps Script or Google Form endpoint:
1. Create a Google Form matching the registration fields.
2. Go to Form → “View Responses” → Google Sheet.
3. Use “Form > Script Editor” and deploy a web app endpoint to accept POSTs.
4. Replace `mailto:` logic in `scripts.js` with `fetch(googleScriptURL, { method: "POST", body: JSON.stringify(registration) })`.

Or use Airtable API with personal access tokens.

## 🧾 Deployment (GitHub Pages)
1. Push the repo to GitHub.
2. Go to **Settings → Pages → Source → main /root**.
3. Wait 1–2 minutes → your site will be live at `https://<username>.github.io/crack-website/`.

## 🔧 Customize Before Launch
1. Replace `images/logo-crack.png` and `images/logo-smvitm.png`.
2. Update `organizer@crack.example` in JS and footer.
3. Add actual workshop dates and trainers.
4. Add your Google Analytics ID.
5. Replace OG image URLs.
6. Add privacy policy / terms links.
7. Insert your real contact number.
8. Update certificate template link.
9. Add real social links in footer.
10. Update bank/payment details for pay-at-venue flow.

---

© 2025 CRACK Training
