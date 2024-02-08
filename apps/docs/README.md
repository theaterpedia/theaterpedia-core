# TP-DOCS

Here we build-out the external documentation for theaterpedia and crearis.
It targets admins and powerusers, who intend to get a deeper understanding of config, layouts and blocks.

Devs and other skilled people who want to extend or collaborate on the filebase of theaterpedia and crearis should refer to the source-code and readmes.

## Clone

Clone the repository (using `nuxi`):

```bash
npx nuxi init -t themes/docus
```

## Setup

Install dependencies:

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Edge Side Rendering

Can be deployed to Vercel Functions, Netlify Functions, AWS, and most Node-compatible environments.

Look at all the available presets [here](https://v3.nuxtjs.org/guide/deploy/presets).

```bash
yarn build
```

## Static Generation

Use the `generate` command to build your application.

The HTML files will be generated in the .output/public directory and ready to be deployed to any static compatible hosting.

```bash
yarn generate
```

## Preview build

You might want to preview the result of your build locally, to do so, run the following command:

```bash
yarn preview
```

---

For a detailed explanation of how things work, check out [Docus](https://docus.dev).
