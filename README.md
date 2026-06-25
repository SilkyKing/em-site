# ellenmarshal.com

Ellen Marshall's personal website, hosted free on GitHub Pages.

## Structure
- `index.html`, `styles.css`, `script.js` — the **main website** at `ellenmarshal.com`.
- `assets/` — photos and the monogram.
- `dutch-invite/index.html` — the **villa companion invitation** at `ellenmarshal.com/dutch-invite` (a self-contained page in the same brand).
- `CNAME` — points the GitHub Pages site at the custom domain. **Do not delete.**

## Email lists (Kit / ConvertKit)
Two separate lists, one Kit account, segmented by which form a subscriber came through:
- **Letters from Lombok** — the main-site newsletter (Kit form `9607819`).
- **Dutch Invite** — the villa application (Kit form `9607341`), with all 9 application fields stored as custom fields.

Both forms post directly to Kit via a small handler (no page reload) and show an inline success message.

## Editing
Change a file here on GitHub (pencil ✏️ → Commit), and the live site auto-updates in ~30 seconds. The fade-in animations are gated behind a `js` class so the page always renders even without JavaScript.
