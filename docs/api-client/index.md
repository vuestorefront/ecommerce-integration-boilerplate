# API Client

::: subheader

For more complex use cases, you can use our API Client to make requests to replace_me 

:::

::: warning

Before working directly with the API Client, you should checkout our replace_me integration's [composables docs](/theme/composables/use-billing.html). They cover many common use cases and handle all the API calls under the hood.
:::



When developing your storefront, you may come across situations where this integration doesn't have a pre-built composable for your use case. In these situations, you can use our API Client to make requests to replace_me.


## Server Middleware

Our API Client adds server middleware of your Vue Storefront application and acts as a proxy to the [replace_me] API. It exposes several endpoints that:

1. Accept requests from your Nuxt application
2. Send requests to the [replace_me] API with the proper format and communication technology
3. Return a formatted response to your Nuxt application

::: read-more
You can learn more about Server Middleware on our [Core Docs](https://docs.vuestorefront.io/v2/architecture/networking.html)
:::

## Calling API Methods

Every endpoint in the API Client comes with a dedicated method that you can use to send a request to your server middleware. This method is added to your [VSF Context](https://docs.vuestorefront.io/v2/architecture/application-context.html) under the `$[replace_me].api.${METHOD_NAME}` key. 

[//]: # (Make changes to this example depending on your integration's structure)

For example, let's say you want to fetch a product from the [replace_me] API. You can use the `getProduct` method from the API Client to do so. This method is added to your VSF Context under the `$[replace_me].api.getProduct` key.

```js
// VSF Context Object
{
  [replace_me]: {
    api: {
        getProduct: (/* params */) => { /* ... */ }
        // ...
    },
    // ...
  },
}
```

Using object destructuring and the `useVSFContext` composable, we have a few different ways to access `getProduct` from our VSF Config. 

```js
// 1. Getting the whole context
const context = useVSFContext();
context.$[replace_me].api.getProduct(/* params */);

// 2. Access the $[replace_me] object in our context
const { $[replace_me] } = useVSFContext();
$[replace_me].api.getProduct(/* params */);

// 3. Access the $[replace_me].api  object
const { $[replace_me]: { api } } = useVSFContext();
api.getProduct(/* params */);

// 4. Access the $[replace_me].api.getProduct method
const { $[replace_me]: { api: { getProduct } } } = useVSFContext();
getProduct(/* params */);
```

Server Middleware endpoints follow the structure `/api/{INTEGRATION_NAME}/{ENDPOINT_NAME}`. For example, the `getProduct` endpoint from the [replace_me] API Client is available at `/api/[replace_me]/getProduct`.

::: tip
Endpoints are always prefixed with `api` to avoid naming conflicts with your application routes.
:::


## Adding New API Endpoints


Every Vue Storefront integration can be customized by adding `extensions` to the `middleware.config.js` file.

```js
// middleware.config.js
module.exports = {
  integrations: {
    '[replace_me]': {
      // ...
      extensions: (extensions) => [
        ...extensions,
        {
          name: '{YOUR_EXTENSION_NAME}',
          extendApiMethods: {
            async customMethod(context, params) => { /* ... */ }
          }
        }
      ],
    }
  }
};
```

This adds add a new `/api/[replace_me]/api/customMethod` endpoint that can be called via `context.$[replace_me].api.customMethod`.

::: read-more
Learn how to extend the replace_me integration in our [Core Docs > Extending Integrations](https://docs.vuestorefront.io/v2/integrate/extending-integrations.html#example-adding-new-api-endpoints)
:::