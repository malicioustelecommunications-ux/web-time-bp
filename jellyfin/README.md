# BBFC rating badges for Jellyfin

Replaces Jellyfin's plain "GB-15" rating label with BBFC-style badges.

Jellyfin's web client puts the rating in the page as plain text, with no
attribute or class that says which rating it is, so CSS alone can't tell a
15 from an 18. `bbfc-ratings.js` reads the text and adds `data-bbfc="15"`;
`bbfc-ratings.css` styles on that.

## Install

1. Install the [JavaScript Injector](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector)
   plugin (Jellyfin 10.11 or 12) and restart the server.
2. Dashboard > Plugins > JavaScript Injector > Add Script. Paste in
   `bbfc-ratings.js`, tick Enabled, save.
3. Dashboard > Branding > Custom CSS code. Paste in `bbfc-ratings.css`, save.
4. Refresh the browser.

## What it matches

Jellyfin's TMDb provider stores UK certificates as `GB-15`, `GB-12A`,
`GB-PG` and so on when the library's metadata country is United Kingdom.
The script matches those, plus `UK-15`, `GB:15` and `UK 15`, in any case.
Anything else, such as a US `PG-13` fallback, keeps Jellyfin's normal
style. If your NFO files store bare values like `15`, set
`ALLOW_UNPREFIXED` to `true` at the top of the script.

## Limits

- Only clients that use Jellyfin's web interface pick this up: browsers,
  Jellyfin Media Player and Jellyfin Desktop, and the Android and iOS
  mobile apps. The Android TV, Roku, Swiftfin and Kodi clients draw their
  own interface and ignore custom CSS and scripts.
- Jellyfin shows the rating on films and series, not on individual seasons
  or episodes.
- Badges are 10pt, or 12.5pt in Jellyfin's TV layout to match its 125%
  text scaling.
