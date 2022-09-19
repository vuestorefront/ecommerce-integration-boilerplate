# Default Routes

| Route path                     | Component (in the `pages` directory) | Route name       |
| ------------------------------ | ------------------------------------ | ---------------- |
| `/`                            | `Home.vue`                           | `home`           |
| `/p/:id/:slug/`                | `Product.vue`                        | `product`        |
| `/c/:slug_1/:slug_2?/:slug_3?` | `Category.vue`                       | `category`       |
| `/my-account/:pageName?`       | `MyAccount.vue`                      | `my-account`     |
| `/checkout`                    | `Checkout.vue`                       | `checkout`       |
| `/checkout/shipping`           | `Checkout/Shipping.vue`              | `shipping`       |
| `/checkout/billing`            | `Checkout/Billing.vue`               | `billing`        |
| `/checkout/payment`            | `Checkout/Payment.vue`               | `payment`        |
| `/checkout/thank-you`          | `Checkout/ThankYou.vue`              | `thank-you`      |
| `/reset-password`              | `ResetPassword.vue`                  | `reset-password` |

::: tip Optional Route Params
Route params with a `?` are optional. For example, `/c/women` and `/c/women/shirts` will both resolve to the `category` route.
:::
    