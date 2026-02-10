# Frontend Project — Airbnb Clone (Editable)

Hey! This is a simple, editable Airbnb-like homepage built with React + Vite + Tailwind.

## What you'll find
- React + Vite dev setup
- Tailwind for styles
- Leaflet map showing listing markers
- Client-side search filter
- Favorites saved in localStorage
- Local HD images in `src/assets/` (placeholder images)

## Quick start
1.  
2. `npm run dev`
3. Open the URL shown by Vite (usually http://localhost:5173)

## Where to look
- `src/App.jsx` — main app, state, search, favorites
- `src/data/stays.js` — sample listing data (image paths + coords)
- `src/components/` — Header, Footer, MapView
- `src/assets/` — local images (replace with your own Unsplash images if you like)

## Replace images with Unsplash
If you want real Unsplash photos:
1. Download images you like (e.g., 1920x1080)
2. Put them in `src/assets/` and keep the same filenames, or update `src/data/stays.js` to point to new paths.

## Notes
- The images included here are generated placeholders (no external downloads in this package).
- If you get peer warnings for `react-leaflet` or `leaflet`, try installing the exact versions specified in `package.json`.

## Need help?
Tell me what OS you use and any errors you hit — I’ll help you debug.
