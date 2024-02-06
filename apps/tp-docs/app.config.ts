export default defineAppConfig({
  docus: {
    title: 'Crearis',
    description: 'Dev-Documentation for our theaterpedia-initiative.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'nuxt_js',
      github: 'theaterpedia/theaterpedia-core'
    },
    github: {
      dir: 'docus/content',
      branch: 'main',
      repo: 'theaterpedia-root',
      owner: 'theaterpedia',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      title: 'Crearis',
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})