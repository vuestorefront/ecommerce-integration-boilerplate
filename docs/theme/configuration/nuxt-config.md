# Nuxt Config

::: subheader
Define the configuration for your Nuxt application
:::

::: read-more
Learn more about the Nuxt Configuration properties on the [Nuxt Config Docs](https://nuxtjs.org/docs/configuration-glossary/configuration-alias)
:::

Our default theme comes with a predefined `nuxt.config.js` file that contains the configuration for your Vue Storefront application. This page will cover the config options and default values that a new Vue Storefront for replace_me project comes with when you create a project. 

For a full list of Nuxt configuration options, see the [Nuxt Config Docs](https://nuxtjs.org/docs/configuration-glossary/configuration-alias).

## `dev`

Defines whether the application is running in development or production mode. 

This property is overwritten by the Nuxt commands:
- running `nuxt` will force `dev` to `true`
- running `nuxt build`, `nuxt start`, or `nuxt generate` will force `dev` to `false`

**Default Value**

```js
dev: process.env.NODE_ENV !== 'production'
```

## `publicRuntimeConfig`

Used to pass dynamic config and environment variables to your Nuxt context. Values defined in `publicRuntimeConfig` are accessible in **both client and server** code by using `$config`.

**Default Value**

```js
publicRuntimeConfig: {
    // exposed in Vue components via this.$config.middlewareUrl
    middlewareUrl: process.env.API_BASE_URL || 'http://localhost:3000/api/' 
}
```
## `server`

**Default Value**

## `head`

**Default Value**

## `loading`

By default, Nuxt comes with a loading progress bar component that's shown between routes. The `loading` property gives us a way to customize it. 

## `router`

The `router` property allows us to configure Nuxt's Router, which uses `vue-router` under the hood.

### `middleware`

Sets the default middleware for every page of your application.



### `scrollBehavior`

Method that allows you to define a custom behavior for the scroll position between the routes. This method is called every time a page is rendered. 

By default, we scroll to the top of the page on every route change.

### `extendRoutes`

Allows you to add custom routes to your application. By default, Nuxt uses file-based routing. For example, the file `pages/Checkout/Billing.vue` would be accessible at `/Checkout/Billing`

To allow for better code organization while still providing clean readable URLs, we use the `extendRoutes` property to add custom routes to our application.

## `buildModules`

## `modules`

## `plugins`

## `serverMiddleware`

## `i18n`

Configuration for the `@nuxtjs/i18n` module.

::: read-more
Learn more about the [Nuxt I18n Module](https://i18n.nuxtjs.org/)
:::



**Default Value**

## `styleResources`

Configuration for `nuxt-community/style-resources-module`. 

[What does it do?]


::: read-more
Learn about the [Nuxt Style Resources Module](https://github.com/nuxt-community/style-resources-module)
:::

## `build`

## `pwa`

Configuration for the `@nuxtjs/pwa` module. 

[What does PWA do?]

::: read-more
Read the full `@nuxtjs/pwa` [configuration docs](https://pwa.nuxtjs.org/setup) to see how to learn about the different modules and options you can set.
:::

## `image`

Configuration for the `@nuxt/image` module. 

You can set your `provider` in your `.env` files and then set up the specific configuration for that provider in this property.

::: read-more
Read the full `@nuxt/image` [configuration docs](https://v1.image.nuxtjs.org/configuration) to learn the configuration for your provider
:::

## `googleFonts`

Configuration for the `@nuxtjs/google-fonts` module. Here is where you can define the Google Font families and variants to load into your application.

::: read-more
Read the full `@nuxtjs/google-fonts` [configuration docs](https://google-fonts.nuxtjs.org/options) to learn the configuration for your provider
:::