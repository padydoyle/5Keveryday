# Lap Zero V2 — 5K Every Day

Lap Zero is an installable GitHub Pages PWA built around one goal: run 5K consistently until 5K feels easy.

## V2 highlights

- Daily 5K streak with the track-loop progress visual.
- Dashboard with rolling 7-day 5K time, heart rate, best 5K and total distance.
- Easy 5K Score combining consistency, pace, average heart rate and perceived effort.
- Run types: Recovery, Easy, Normal, Hard and PB attempt.
- Perceived effort: Easy, Comfortable, Moderate, Hard and Brutal.
- Garmin screenshot scan with distance, time, HR, cadence, elevation and calories.
- Progress charts and 7-day vs previous-7 comparisons.
- 22 achievements with locked/unlocked track-style badges, progress bars and unlock popups.
- Complete JSON backup/restore. V2 backups include runs, settings and achievement unlocks, but exclude the API key.
- Automatic migration from the original `lapzero_entries_v1` localStorage data.
- Offline PWA shell via service worker.

## Files to upload to GitHub

Upload these to the root of your repository:

- `index.html`
- `manifest.json`
- `sw.js`
- `icon-192.png`
- `icon-512.png`

Then enable GitHub Pages from the `main` branch / root.

## Backups before updates

In the app open **Settings → Backup & restore → Export complete backup** before replacing app files. Importing a backup merges runs by date, so you can safely restore after an update without duplicating runs.

## Garmin screenshot scan

The scan is optional. Add an Anthropic API key in Settings to use it. The key stays in browser localStorage and is not included in exports. Manual entry works without a key or internet connection.
