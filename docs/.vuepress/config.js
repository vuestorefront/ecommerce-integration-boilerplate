module.exports = {
  title: 'Vue Storefront 2 for __replace_me__',
  base: '/',
  description:
    'Documentation for the __replace_me__ connector for Vue Storefront 2',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  configureWebpack: (config) => {
    config.module.rules = config.module.rules.map((rule) => ({
      ...rule,
      use:
        rule.use &&
        rule.use.map((useRule) => ({
          ...useRule,
          options:
            useRule.loader === 'url-loader'
              ? /**
            Hack for loading images properly.
            ref: https://github.com/vuejs/vue-loader/issues/1612#issuecomment-559366730
           */
                { ...useRule.options, esModule: false }
              : useRule.options
        }))
    }));
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    [
      '@vuepress/plugin-medium-zoom',
      {
        // This selector excludes images from the "Integrations" page
        selector: 'main :not(.tile-image) > img'
      }
    ],
    '@vuepress/active-header-links',
    '@vuepress/search'
  ],
  theme: 'vsf-docs',
  themeConfig: {
    repo: 'https://github.com/vuestorefront/__replace_me__',
    docsRepoPath:
      'https://github.com/vuestorefront/__replace_me__/tree/main/docs', // used to generate direct edit links on docs pages.

    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'develop',
    editLinkText: 'Edit this page',
    logo:
      'https://user-images.githubusercontent.com/1626923/137092657-fb398d20-b592-4661-a1f9-4135db0b61d5.png',
    nav: [
      { text: 'Vue Storefront', link: 'https://vuestorefront.io/' },
      { text: 'Core Documentation', link: 'https://docs.vuestorefront.io/v2/' },
      // { text: 'Demo', link: '' },
      {
        text: 'GitHub',
        link: 'https://github.com/vuestorefront/__replace_me__'
      },
      {
        text: 'Roadmap',
        link: 'https://github.com/vuestorefront/__replace_me__'
      }
    ],
    sidebar: [
      {
        title: '',
        collapsable: false,
        children: [
          ['/', 'Introduction'],
          ['/guide/about', 'About'],
          ['/supported-features', 'Supported Features']
        ]
      },
      {
        title: 'Getting Started',
        collapsable: true,
        children: [
          ['/setup/installation', 'Installation'],
          ['/setup/configure-__replace_me__', 'Configuring __replace_me__'],
          ['/setup/configure-vue-storefront', 'Configuring Vue Storefront']
        ]
      },
      {
        title: 'Composables',
        path: '/composables/'
      },
      {
        title: 'API Client',
        path: '/api-client/'
      }
    ]
  }
};
