# Follow one decision

An independent, source-linked guided tour of a real SageOx workflow: a recorded decision, an agent session that retrieves it, and a merged pull request that links the evidence. The [one-pager](brief.html) explains the observed friction, the GTM hypothesis, and its limits.

**Live site:** https://shalaka003.github.io/sageox-fieldnote/

## Run locally

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/`. The site is plain HTML, CSS, and JavaScript. It uses no API, account, build step, cookies, or analytics. The only external site asset is the Google Fonts stylesheet; system fonts provide a fallback.

## Publishing

GitHub Pages can publish the repository's `main` branch from `/ (root)`. `.nojekyll` keeps the site as authored. The public entry points are `/` and `/brief.html`.

## Evidence boundaries

- The recording and session are SageOx's published artifacts, accessible to a signed-in account during review on October 8, 2026. Visitors may need their own SageOx account to open them.
- The published session reaches planning and stops. The merged PR provides evidence of the eventual code change.
- The first-look friction in the one-pager was observed in one new account, not measured across users.
- The guide uses paraphrases and original graphics. It does not show invented SageOx screens or claim that the site is an official SageOx property.
