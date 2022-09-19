# Nuxt Components

::: read-more
Learn more about Nuxt components in the [Nuxt documentation](https://nuxtjs.org/docs/features/nuxt-components).
:::
## `<Nuxt>`

The `<Nuxt>` component is the component you use to display your page components. Basically, this component gets replaced by what is inside your page components depending on the page that is being shown. Therefore it is important that you add the `<Nuxt>` component to your layouts.

## `<NuxtChild>`

This component is used for displaying the children components in a nested route.

TODO: Code sample

## `<NuxtLink>`

To navigate between pages of your app, you should use the `<NuxtLink>` component. This component is included with Nuxt and therefore you don't have to import it like you do with other components. It is similar to the HTML `<a>` tag except that instead of using a href="/about" you use to="/about". If you've used vue-router before, you can think of `<NuxtLink>` as a replacement of `<RouterLink>`

The `<NuxtLink>` component should be used for all internal links. That means for all links to the pages within your site you should use`<NuxtLink>`. The `<a>` tag should be used for all external links. 
