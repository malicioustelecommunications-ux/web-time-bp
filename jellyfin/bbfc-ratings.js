// BBFC rating badges for Jellyfin
//
// Jellyfin renders the official rating as plain text ("GB-15") with no
// attribute that CSS can select on. This tags each rating with
// data-bbfc="15" so bbfc-ratings.css can style it. It only adds attributes
// and never touches the text, so it is safe on pages Jellyfin re-renders.
//
// Install with the JavaScript Injector plugin.

(() => {
    'use strict';

    // Set to true if your metadata stores UK ratings without a GB- or UK-
    // prefix (some NFO files do). Leave false otherwise: a bare "PG" or
    // "12" is just as likely to be from another country's system.
    const ALLOW_UNPREFIXED = false;

    const PREFIXED = /^(?:GB|UK)\s*[-:]?\s*(U|PG|12A|12|15|18|R18)$/i;
    const UNPREFIXED = /^(U|PG|12A|12|15|18|R18)$/i;

    const tagRatings = () => {
        for (const el of document.querySelectorAll('.mediaInfoOfficialRating')) {
            const text = el.textContent.trim();
            const match = text.match(PREFIXED) || (ALLOW_UNPREFIXED && text.match(UNPREFIXED));
            const rating = match ? match[1].toUpperCase() : null;

            if (rating === (el.dataset.bbfc || null)) continue;

            if (rating) {
                el.dataset.bbfc = rating;
                el.setAttribute('role', 'img');
                el.setAttribute('aria-label', `BBFC rating: ${rating}`);
            } else {
                delete el.dataset.bbfc;
                el.removeAttribute('role');
                el.removeAttribute('aria-label');
            }
        }
    };

    // Jellyfin is a single-page app, so re-check whenever the page changes.
    // Batched to once per frame; attribute changes are not observed, so
    // tagging cannot retrigger itself.
    let queued = false;
    new MutationObserver(() => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(() => {
            queued = false;
            tagRatings();
        });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });

    tagRatings();
})();
