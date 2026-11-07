# Project Hypeman

## Deploying to Netlify

One-time setup:

```
npm i -g netlify-cli
netlify login
netlify init        # link or create the site
```

Then:

- `npm run dev` – local dev server
- `npm run deploy:preview` – draft deploy with a preview URL
- `npm run deploy:prod` – production deploy

Config lives in `netlify.toml`; the site is served from `public/`.
