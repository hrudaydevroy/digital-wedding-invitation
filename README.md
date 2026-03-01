# Wedding Management & Live Streaming Platform

This workspace contains a static frontend for a wedding website with:

- Static invitation, countdown, story, timeline, gallery, RSVP, and more.
- Admin login placeholder (`admin.html`).
- Fixed floating button to jump to gallery.
- Live stream section for embedding YouTube Live.
- Mobile-friendly, PWA-ready design.

## Local Development

1. **Open a terminal** and navigate to the project folder:
   ```powershell
   cd "d:\akka wedding"
   ```

2. **Start a simple HTTP server** (required to serve files with fetch/audio/video). For example, using Python 3:
   ```powershell
   python -m http.server 8000
   ```
   or install [`live-server`](https://www.npmjs.com/package/live-server) and run:
   ```powershell
   npx live-server .
   ```

3. **Open your browser** at `http://localhost:8000` and you can interact with the site.

> The `admin.html` page is just a placeholder; you will need a backend (Spring Boot) with JWT authentication to make it functional.

## GitHub

To put the project under version control and push to GitHub:

```powershell
cd "d:\akka wedding"
# initialize repository
git init
# add all files
git add .
# create initial commit
git commit -m "Initial wedding site with gallery, live stream and admin login button"
# add remote (replace URL with your repository)
# git remote add origin https://github.com/youruser/your-repo.git
# push to main branch
# git branch -M main
# git push -u origin main
```

Once the repo is on GitHub you can enable GitHub Pages or deploy the frontend via Netlify/Vercel.

## Deployment

- **Frontend**: simply upload the static files (`index.html`, `style.css`, `script.js`, `photos/`, etc.) to Netlify, GitHub Pages, or any static hosting service.
- **Backend**: this workspace contains only the frontend; the Spring Boot backend and MongoDB/Cloudinary integration should be developed separately and hosted (e.g., on Render).

## Next Steps

- Implement the Spring Boot backend with JWT admin authentication, file upload to Cloudinary, and MongoDB metadata storage.
- Connect the frontend to the backend API for gallery and RSVP operations.
- Replace the YouTube `STREAM_ID` in the `live-stream` section with the actual live stream identifier.

Happy wedding planning! 🎉