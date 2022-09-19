# useProduct

::: subheader
This composable fetches products from your replace_me store. It can be used to fetch a single product or a list of products.

:::

## Type

```js
function useProduct(
  id: string
): {
  products: ProductVariant[],
  loading: boolean,
  error: UseProductErrors,
  search: (params: TODO) => Promise<void>,
}

type ProductVariant = {
  __typename?: "ProductVariant";
  id: Scalars["Int"];
  key?: Maybe<Scalars["String"]>;
  sku?: Maybe<Scalars["String"]>;
  prices?: Maybe<Array<ProductPrice>>;
  price?: Maybe<ProductPrice>;
  images: Array<Image>;
  assets: Array<Asset>;
  availability?: Maybe<ProductVariantAvailabilityWithChannels>;
  attributesRaw: Array<RawProductAttribute>;
  attributes: ProductType;
  attributeList: Array<Attribute>;
}

// https://github.com/vuestorefront/vue-storefront/blob/main/packages/core/src/types.ts
export interface UseProductErrors {
  search: Error;
}

// ApolloQueryResult<T> Type Definition 
// https://github.com/apollographql/apollo-client/blob/main/src/core/types.ts
type EnhanceProduct = (
  productResponse: ApolloQueryResult<ProductData>,
  context: Context
) => ApolloQueryResult<ProductData> 
```

## Params

- `id: string` - a unique identifier for your composable that is as the key for the multiple `sharedRef` objects that will be created by the composable. This allows your app to share the same data between multiple instances of the same query.

## Return Values

-  `search: (params: BOILERPLATE) => Promise<void>` - searches of products using params and populates `products` property
-  `products: ProductVariant[]` - an array of products
-  `loading: boolean` indicates whether the products are loading
-  `error: UseProductErrors` - an error object

```js
const { products, search, loading, error } = useProduct('UNIQUE_ID');
```

It accepts a single params object that with options for `searchParams`, `customQuery`, and `enhanceProduct`.



## Getters

::: read-more
To learn more about getters, read our [Core Docs Guide to Getters](https://docs.vuestorefront.io/v2/composition/getters.html)
:::

`useProduct` comes with a set of getters that give you easy access to commonly used product properties.




## Examples

``` javascript
import { computed } from '@nuxtjs/composition-api';
import { useProduct, productGetters } from 'BOILERPLATE';
import { onSSR } from '@vue-storefront/core';

export default {
  setup () {
    const { products, search, loading, error } = useProduct('<UNIQUE_ID>');

    onSSR(async () => {
      await search({ slug: 'super-t-shirt' })
      // can also get multiple products
      // await search({ ids: ['id-1', 'id-2'] });
    })

    return {
      loading,
      error,
      product: computed(() => productGetters.getFiltered(products.value, { master: true, attributes: context.root.$route.query })[0]),
      option: computed(() => productGetters.getAttributes(products.value, ['color', 'size'])),
      configuration: computed(() => productGetters.getCategoryIds(product.value))
    }
  }
}
```


