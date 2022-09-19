# useShipping

::: subheader
This composable [TODO: what does it do]. [TODO: How can it be used]
:::

## Type

```js
function useShipping(
  param: string
): {
  val1: ProductVariant[],
  val2: boolean,
  val3: UseProductErrors,
  search: () => Promise<void>,
}

// BOILERPLATE NOTE - include the type def for any non-primitive type used by the composable
// if from a different repo, link to the repo or source code
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

- `param: type` - [TODO: description of param]

## Return Values

-  `val: type` - [TODO: description of val]



## Getters

::: read-more
To learn more about getters, read our [Core Docs Guide to Getters](https://docs.vuestorefront.io/v2/composition/getters.html)
:::

`useShipping` comes with a set of getters that give you easy access to commonly used properties.


## Examples

``` javascript
import { computed } from '@nuxtjs/composition-api';
import { useExample, exampleGetters } from 'BOILERPLATE';
import { onSSR } from '@vue-storefront/core';

export default {
  setup () {
    const { search } = useShipping('<UNIQUE_ID>');

    onSSR(async () => {
      await search({ slug: 'super-t-shirt' })
      // BOILERPLATE NOTE - can show alternative use-cases in comments when applicable
      // await search({ ids: ['id-1', 'id-2'] });
    })

    // BOILERPLATE NOTE - also show how to use getters

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


