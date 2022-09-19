# Theme

::: subheader
Our integration comes with a powerful default theme built for replace_me
:::

When you create a new Vue Storefront for replace_me project, you get a Nuxt application specifically configured and set up for your replace_me store.

## What's in the default theme?

There are many features in our default theme that are designed to speed up your development cycle.

### Configuration

When building a storefront, there are many things you'll need to set up - image providers, fonts, connections to your replace_me store, and more.

Our default theme comes with many of these features preconfigured, so you can get started quickly.

::: read-more
See the default configuration options at [Default Theme > Configuration > Nuxt Config](/theme/configuration/nuxt-config.html)
:::

### Composables

Composables are reusable functions that wrap around the business logic for [replace_me]. They expose three types of data:

1. Reactive state
2. Methods to update the state
3. Getters to quickly access important values in our state

Under the hood, many of our composables interact with [replace_me] via our [API Client](/api-client/). For a full list of available composables, check the sidebar navigation for this page.

::: read-more
Learn more about how composables work on our [Core Docs > Concepts > Composables](https://docs.vuestorefront.io/v2/composition/composables.html) guide
:::

### Default UI Layer

In addition to the composables containing business logic, our default theme comes with a UI layer that contains many pre-built Vue pages and components for stores. These call the composables to get the data they need and use [Storefront UI](https://vuestorefront.io/storefront-ui) to render mobile-friendly, accessible, and SEO-friendly components.

You can see our default theme with its pages and components in action on our [[replace_me] demo](https://demo-magento2.europe-west1.gcp.vuestorefront.cloud/default).

::: tip Our UI Layer is fully customizable

Even though our project comes with a default UI layer, you have full control to extend existing components/pages or build your own. And if you don't want to use Storefront UI, the rest of the project can work with any other UI library or custom code.

:::
