---
fileDirToc: true
---
# Project Structure

::: subheader 
Vue Storefront is built on top of Nuxt. For this reason, our project structure inherits a lot from Nuxt but has some additional files
:::

::: tip BOILERPLATE NOTE

`dir/`

Directories should end with a `/` to indicate that they are a directory. Include a description of how it's used. 

If formatted as [The `dir` folder] - the theme will display `[foldericon] dir` 
:::
::: tip BOILERPLATE NOTE
`file.js`

Files should include the extension to indicate that they are a file. Include a description of how it's used. 
If formatted as [The `file` folder] - the theme will display `[foldericon] file` 
:::


::: read-more
Learn more in the [Core Docs Project Structure](https://docs.vuestorefront.io/v2/getting-started/project-structure.html)
:::


## The `nuxt/` Directory

A dynamically-generated build directory that Nuxt generates during development. 

::: warning
This entire directory gets recreated when running `npm run dev`, so you should not manually modify its contents nor include it in your version control (e.g. Git).
:::

## The `assets/` Directory

## The `components/` Directory

A directory contains Vue components that can be used on different pages or parts of your application. You can import these components from pages, layouts, and other components.

## The `extensions/` Directory

## The `helpers/` Directory

## The `lang/` Directory

A Vue Storefront-specific directory containing translations for your application. Available locales are configured in the `nuxt.config.js` file

## The `layouts/` Directory

A directory to create reusable components that serve as a UI-base for multiple pages of your application. Nuxt will convert each top-level file into layout that can be set using the `layout` property in your page components. 

## The `middleware` Directory

## The `pages/` Directory

## The `plugins/` Directory

## The `serverMiddleware/` Directory

## The `static/` Directory

## The `.env.example` File

## The `jest.config.js` File

## The `middleware.config.js` File

## The `nuxt.config.js` File

## The `package.json` File

## The `shims.webpack.d.ts` File

## The `tsconfig.json` File 




