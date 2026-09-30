# Pratix Short-Form Content Repurposer

A privacy-first, browser-only content packaging tool for creators and small businesses.

## Features

- Paste an idea, transcript, article or product note up to 15,000 characters.
- Generate platform-specific starting points for TikTok, Instagram/Reels, YouTube Shorts and X.
- Produce a spoken hook, caption, title, description, carousel plan, on-screen beat plan and reply CTA.
- Add a brand voice guide; it is saved only in local browser storage and included as an editor note in each output.
- Choose output language independently from the interface language across 12 supported languages.
- Copy individual outputs, copy the complete pack or download a TXT file.
- No signup, backend, API key or content upload.

## Local development

```bash
npm test
```

The app is a static `index.html` deployment. Local processing is intentional: this version accepts pasted transcripts and articles rather than fetching URLs, avoiding third-party uploads and CORS surprises.
