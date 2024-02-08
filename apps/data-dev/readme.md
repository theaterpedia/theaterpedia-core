# Theaterpedia-Core: data-dev

This is a dev- and testing-app only.
1. From here we track the progress of the odoogap-graphql based integration with vsf
2. We collect additional tests and logic to develop the graphql-based parts of the data-layer
3. pruvious is disabled here (this is handled in the nuxt-config of the data-layer)

Look at the [Theaterpedia documentation](https://docs.theaterpedia.org/) to learn more.

to start developing:
```bash
yarn install (from root)
cp apps/data-dev
cp .env.example .env
cd ..
cd ..
yarn data-dev  // runs the setup on p 3002
```

