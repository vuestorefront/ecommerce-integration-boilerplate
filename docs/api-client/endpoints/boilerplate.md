# Boilerplate

::: subheader
Fetches customer addresses
:::

## Type

```js
const addBillingAddress(
    context: Context, 
    params: AddBillingAddressParams, 
    customQuery?: CustomQuery
): Promise<AddBillingAddressResponse>

interface AddBillingAddressParams {
  address: Address;
  billingDetails?: CustomQuery;
}
```

## Params

- `context: Context` - Automatically injected context - this automatically gets added when using our API Client.
- `params: AddBillingAddressParams` - Object containing the address and billing details
- `customQuery?: CustomQuery` - Custom queries that are included with the request

### Default Query

## Return Values

- `example: Promise<any>` - [description of the return value]

## Examples