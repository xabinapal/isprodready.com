# [IsProdReady.com](https://isprodready.com)

![IsProdReady.com Banner](./static/banner.png)

<div align="center">

[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support%20me-ff5e5b?logo=ko-fi&logoColor=white)](https://ko-fi.com/xabinapal)

</div>

## What is this?

**The brutal truth about your product**.

A website that tells you the harsh truth about whether your product is actually ready for production. Just visit **[https://isprodready.com](https://isprodready.com)** to get roasted in real time.

Because sometimes you need a reality check before deploying your "it works on my machine" code to real users.

## Tech stack

- **Frontend & Backend**: SvelteKit + TypeScript (because we're fancy and full-stack)
- **Styling**: SCSS (because CSS-in-JS is too mainstream)
- **Testing**: Vitest + Playwright (because we actually test our jokes)
- **Build Tool**: Vite (because Webpack is so 2020)
- **Deployment**: Cloudflare Workers (because serverless is the future, allegedly)

## How to use the API

Besides the official website (**[https://isprodready.com](https://isprodready.com)**), you can integrate our sarcasm into your app. Just hit this endpoint:

```
GET https://isprodready.com/no
```

Example response:
```json
{"reason": "Your QA team called, they're still laughing."}
```

It returns a random reason why your product isn't ready for production. Perfect for Slack bots that need to roast your deployment, CI/CD pipelines that want to be passive-aggressive, or any situation where you need to tell someone "no" with style.

## How to contribute

Want to add more ways to tell developers their code sucks? Just add your reason to `data/reasons.txt` (one per line, keep it funny) and commit it. Cloudflare will handle it in the build process automatically!

We could have just imported the text file directly, but where's the fun in that? This way you get to experience the joy of build scripts and auto-generated code, just like in a real enterprise project!

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for details.

---

_**Remember**: If you're reading this README instead of fixing your production issues, you're probably not ready for production._
