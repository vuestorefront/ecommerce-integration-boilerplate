const INTEGRATION_NAME = 'replace_me Integration'; // This should include "Vue Storefront"

module.exports = {
  title: `Vue Storefront 2 for ${INTEGRATION_NAME}`,
  base: '/',
  description: `Documentation for the ${INTEGRATION_NAME} integration for Vue Storefront 2`,
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],

  theme: 'vsf-docs',

  themeConfig: {
    title: INTEGRATION_NAME,
    repo: 'https://github.com/vuestorefront/replace_me',
    docsRepoPath: 'https://github.com/vuestorefront/replace_me/tree/main/docs', // used to generate direct edit links on docs pages.
    secondaryNav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Default Theme', link: '/theme/' },
      { text: 'API Client', link: '/api-client/' }
    ],
    sidebar: {
      '/getting-started/': [
        {
          title: 'Getting Started',
          collapsable: true,
          children: [
            ['/getting-started/', 'Overview'],
            ['/getting-started/installation', 'Installation'],
            ['/getting-started/configure-replace_me', `Configuring replace_me`],
            [
              '/getting-started/configure-vue-storefront',
              'Configuring Vue Storefront'
            ],
            ['/getting-started/supported-features', 'Supported Features']
          ]
        },
        {
          title: 'Upgrade Guide',
          collapsable: true,
          children: [
            ['/getting-started/migrate', 'Migration Guide'],
            ['/getting-started/changelog', 'Changelog']
          ]
        }
      ],
      '/guides/': [
        {
          title: 'Project Basics',
          collapsable: true,
          children: [
            ['/guides/', 'Overview'],
            ['/guides/basics/project-structure', 'Project Structure'],
            ['/guides/basics/routing', 'Routing and Navigation']
          ]
        },

        {
          title: 'Products',
          collapsable: true,
          children: [
            ['/guides/products/', 'Overview'],
            ['/guides/products/fetching', 'Fetching Products'],
            ['/guides/products/reviews', 'Managing Product Reviews']
          ]
        },
        {
          title: 'Cart',
          collapsable: true,
          children: [
            ['/guides/cart/', 'Overview'],
            ['/guides/cart/managing-products', 'Managing Products in the Cart']
          ]
        },
        {
          title: 'Checkout',
          collapsable: true,
          closed: true,
          children: [
            ['/guides/checkout/', 'Overview'],
            ['/guides/checkout/shipping', 'Collecting Billing Info'],
            ['/guides/checkout/billing', 'Collecting Shipping Info'],
            ['/guides/checkout/order', 'Creating an Order'],
            {
              title: 'Payment Providers',
              collapsable: true,
              children: [
                ['/guides/checkout/payment-providers/', 'Overview'],
                [
                  '/guides/checkout/payment-providers/custom',
                  'Custom Integration'
                ]
              ]
            }
          ]
        },
        {
          title: 'Users',
          closed: true,
          collapsable: true,
          children: [
            ['/guides/users/', 'Overview'],
            ['/guides/users/register', 'Registering New Users'],
            ['/guides/users/login-logout', 'User Login and Logout'],
            ['/guides/users/password-reset', "Resetting a User's Password"],
            ['/guides/users/addresses', 'Managing User Addresses']
          ]
        },
        {
          title: 'Wishlist',
          closed: true,
          collapsable: true,
          children: [['/guides/wishlist/', 'Overview']]
        },
        {
          title: 'Performance',
          closed: true,
          collapsable: true,
          children: [['/guides/performance/', 'Overview']]
        },
        {
          title: 'Customization',
          collapsable: true,

          children: [
            ['/guides/customization/', 'Ways to Customize'],
            ['/guides/customization/storefront-ui', 'Customizing Storefront UI']
          ]
        }
      ],
      '/theme/': [
        {
          title: 'Theme',
          collapsable: true,
          children: [['/theme/', 'Overview']]
        },
        {
          title: 'Composables',
          collapsable: true,
          children: [
            ['/theme/composables/boilerplate', 'Composable Boilerplate'],
            /* the composables should be sorted alphabetically */
            ['/theme/composables/use-billing', 'useBilling'],
            ['/theme/composables/use-cart', 'useCart'],
            ['/theme/composables/use-category', 'useCategory'],
            ['/theme/composables/use-content', 'useContent'],
            ['/theme/composables/use-facet', 'useFacet'],
            ['/theme/composables/use-forgot-password', 'useForgotPassword'],
            ['/theme/composables/use-make-order', 'useMakeOrder'],
            ['/theme/composables/use-product', 'useProduct'],
            ['/theme/composables/use-review', 'useReview'],
            ['/theme/composables/use-shipping', 'useShipping'],
            ['/theme/composables/use-shipping-provider', 'useShippingProvider'],
            ['/theme/composables/use-store', 'useStore'],
            ['/theme/composables/use-user', 'useUser'],
            ['/theme/composables/use-user-billing', 'useUserBilling'],
            ['/theme/composables/use-user-order', 'useUserOrder'],
            ['/theme/composables/use-user-shipping', 'useUserShipping'],
            ['/theme/composables/use-wishlist', 'useWishlist']
          ]
        },
        {
          title: 'Default UI Elements',
          collapsable: true,
          children: [
            ['/theme/ui/', 'Overview'],
            ['/theme/ui/components', 'Default Components'],
            ['/theme/ui/pages', 'Default Pages'],
            ['/theme/ui/nuxt-components', 'Nuxt Components']
          ]
        },
        {
          title: 'Configuration',
          collapsable: true,
          children: [
            ['/theme/configuration/nuxt-config', 'Nuxt Config'],
            ['/theme/configuration/middleware', 'Middleware Config']
          ]
        }
      ],
      '/api-client/': [
        {
          title: 'API Client',
          collapsable: true,
          children: [['/api-client/', 'Overview']]
        },
        {
          title: 'Endpoints',
          collapsable: true,
          children: [['/api-client/endpoints/boilerplate', 'Boilerplate']]
        }
      ]
    }
  }
};
