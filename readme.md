# Theaterpedia-Core: Theme Episodes

## What's inside?

This is a development-only repo. To get a quick understanding by studying a running example of Theaterpedia head over to the [Theaterpedia-Repo](https://github.com/theaterpedia/theaterpedia).

This is a monorepo, we use turborepo combined with yarn as a package manager. It includes the following packages/apps:

### Main Packages: 2 Layers
This monorepo implements a layered nuxt-architecture, mainly consisting of 2 layers:

#### Layer **Data** 

- initializes a vuestorefront-middleware to query an odoo-backend via graphql
- loads the pruvious-module to setup the backend of a cms
- has composoables prepared to make data-handling easy and safe

#### Layer **Theme**

The repo is changed from pnpm (didn't work for me) to turbo+yarn 1.22.19 on node 20.


### Main Apps: Home + Portal

<!-- #TODO _08 update Apps-Info -->
- `home`: the main app of Theaterpedia, checkout a running example at [Episoden Demokratie](https://demokratie.theaterpedia.org/)
- `portal`: TBD > a portal that integrates information of all of the deployed apps


### Branches, Themes and Templates

<!-- #TODO _08 update Branches/Theming-Info -->
Besides the main-branch you could checkout these branches:
- episodes/main
- courses/main
- dasei/main

We develop different features and different theming there. You find more information in the readme of every branch.


### Other Apps + Packages 

- `apps/data-dev`: dev-app and -logic (tests) to build-out the graphql-logic of the data-layer
- `apps/theme-dev`: dev-app and -logic (tests) to build-out the themes/theme-layers for home and portal
- `apps/tp-docs`: the documentation

<!-- #TODO _06 describe Packages/Other Stuff 

- `docs_demo`: a [VitePress](https://vitepress.vuejs.org/) app
- `ui_demo`: a stub Nuxt component library with [Histoire](https://histoire.dev/)
- `config_demo`: `eslint` configuration (using [@antfu/eslint-config](https://github.com/antfu/eslint-config))
- `tsconfig_demo`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

-->


### Utilities

<!-- #TODO _06 describe Utilities
This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
-->


### Setup
<!-- #TODO _06 fully describe setup, scripts, publishing -->

To install all dependencies, run the following command:

```
yarn
```

### Develop

To develop all apps and packages, run the following command:

```
yarn dev
```

### Lint

To check & fix linter through all apps and packages, run the following command:

```
yarn lint
yarn lint:fix
```

### Test

To run tests through all apps and packages, run the following command:

```
yarn test
```

### Build

To build all apps and packages, run the following command:

```
yarn build
```

<!-- #TODO _06 decide on turbo-features

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
yarn dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
yarn dlx turbo link
```

Use a custom remote cache server [turbo-remote-cache](https://github.com/ducktors/turborepo-remote-cache)

-->

## License

This project is MIT-licensed.

## References

### Open Sources

This project stands on the shoulders of:
- [vuestorefront](https://vuestorefront.io)
- [the odoogap-integration for vuestorefront](https://github.com/odoogap/storefront-ui)
- [pruvious-cms](https://pruvious.com/)


### Layers-Code

Initially the layers were started as described by Kruti Patel on: https://github.com/Krutie/nuxt-layers-playground/
- for detailled explanations watch: https://www.youtube.com/watch?v=dWXRiBQw_lE
- docs on nuxt-layers/extends: https://nuxt.com/docs/getting-started/layers  and   https://nuxt.com/docs/guide/going-further/layers


### Linting, Turbo-Logic

- several things of the basic setup are inspired by the work of @antfu
- the turborepo-setup was integrated from here: https://github.com/gurvan-guss/turborepo-nuxt-boilerplate

<!-- #TODO _06 describe Utilities
a monorepo with Nuxt, Histoire, Vitest & VitePress as a starter for any project that can be easily extended.
You can also find additional branches:
- [TailwindCSS](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/tree/tailwind)
- [TailwindCSS + TailwindUI](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/tree/tailwindui)
- [Unocss](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/tree/unocss)
- [Unocss + Anu](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/tree/unocss-anu)
- [Unocss + Vuetify](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/tree/unocss-vuetify)
- [AdonisJS](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/tree/adonis)
-->


## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
