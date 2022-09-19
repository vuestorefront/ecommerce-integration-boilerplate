# Getting Started

::: subheader
What is Vue Storefront? How does it work? What are the core concepts? This section will answer all these questions and more.
:::

::: read-more
Learn more about what Vue Storefront is in our [Core Docs Introduction](https://docs.vuestorefront.io/v2/getting-started/introduction.html)
:::

Vue Storefront for replace_me is a Nuxt 2 project with some preinstalled plugins and modules specific for replace_me, as well as a ready-to-use e-commerce theme. 

It comes with several modules installed, but most importantly it uses our [API Client](/api-client/) to connect to your replace_me store and provide easy-to-use methods for common use cases like querying products, adding products to a cart, customer accounts, and more. 

We use the power of Nuxt to handle most of the front-end work and Server Side Rendering, while Vue Storefront adds the e-commerce specific bits and integrations to various platforms.




## Why Vue Storefront?

- **Faster Development Cycle** - with out-of-the-box support for replace_me, you can start building your storefront faster
- **Frontend First** - Vue Storefront focuses on enabling you to develop a great customer experience
- **Power Default Theme** - we provide a default theme that is ready to use and can be customized 
- **Customizable** - you can customize our default UI components or create your own
- **Extensible** - integrate to other platforms like CMS providers, payment service providers, and others. 

## Creating your project

The easiest way to get started with Vue Storefront is to set up your project using our CLI. 

You can use `npx` (short for Node Package Execute) - a tool that comes with Node.js - to run our CLI without having to install it globally.


```bash
npx @vue-storefront/cli generate store 
```

Our [Vue Storefront for replace_me installation guide](/getting-started/installation.html) will walk you through the process of creating a new project.

## Learn Vue Storefront

If you are new to the Vue ecosystem, the best place to start learning is the Vue 2 documentation. In our documentation, we assume prior knowledge of Vue (with some exceptions). While we do our best to explain each topic in detail, a lack of this knowledge might cause you to get lost.

We also encourage reading the [Nuxt documentation](https://nuxtjs.org/). In most places, we don't assume this knowledge and add links to related documents, but having it will make you more confident and let you work faster and more efficiently.

Some of Vue Storefront's architecture, concepts, and utilities are the same across several integrations. These topics can be found in our [Core Docs](https://docs.vuestorefront.io/v2/getting-started/introduction.html), but we'll also link to the relevant docs from this integration-specific guide.

## Recommended tools

Below are the tools we use to make the development and debugging easier, and we recommend you use them too.

### Vue Devtools

We strongly recommend installing [Vue Devtools](https://devtools.vuejs.org/guide/installation.html) in your browser. It's an excellent tool for viewing component structures and their current state, inspecting events, routes, and much more.

### Vetur for VS Code

For those using Visual Studio Code as their primary code editor, we also recommend using [Vetur extension](https://marketplace.visualstudio.com/items?itemName=octref.vetur).

It speeds up the development of Vue-based applications by providing features like Vue code autocompletion and syntax highlighting.
