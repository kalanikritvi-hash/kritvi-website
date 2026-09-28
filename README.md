# Kritvi Kalani — Personal Website

A static portfolio site designed for recruiter scanning.

## Deploy on GitHub Pages
1. Create a new GitHub repository.
2. Upload the contents of this folder (not the outer zip).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.

## Local preview
Open `index.html` directly, or run a simple local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Files
- `index.html` — content and structure
- `styles.css` — design and responsive layout
- `script.js` — image viewer and subtle entrance animation
- `assets/` — images and resume PDF

## Easy edits
Search `index.html` for any section heading and edit the text directly. The site uses no framework or build step.
