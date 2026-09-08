# DayWise

DayWise is a private calendar web app with month, week, and day views, color-coded categories, search, dark mode, JSON import/export, and local browser storage.

## Offline / iPhone / iPad

The project includes a service worker and web app manifest. After the site is loaded online at least once, its app shell is cached for offline use. Calendar data is already stored locally with `localStorage`, so saved events remain available without internet on the same installed browser/web app.

### Install on iPhone or iPad

1. Open the GitHub Pages site while connected to the internet.
2. Use Share > Add to Home Screen.
3. Open Day Wise from the Home Screen once while online so the service worker can finish caching.
4. Test by enabling Airplane Mode, fully closing Day Wise, and reopening it from the Home Screen.

When deploying a significant update to cached assets, increment `CACHE_NAME` in `sw.js` (for example, `daywise-offline-v2`).
