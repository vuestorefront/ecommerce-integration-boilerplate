# Installation

::: subheader
Create your new Vue Storefront project project with our CLI.
:::

## Prerequisites

Before proceeding, make sure you have [Node 16](https://nodejs.org/en/) installed. You can check this by running the following command:

```bash
node -v
```

## Installation steps

### Generate a new project

The easiest way to get started with Vue Storefront is to set up your project using our CLI. You can run it using the following command:

```bash
npx @vue-storefront/cli generate store 
```

It will ask you to enter the project's name and select `replace_me` as your e-commerce platform. Once selected, the CLI will create a new project inside the current directory matching your project name.

::: warning Avoid special characters and spaces in the project name 
The CLI will use the project name you enter to create a new directory, so avoid using special characters and spaces
:::

### Install dependencies

Go to the newly created directory and install the required dependencies:

<code-group>
<code-block title="yarn">
```bash
cd <project-name> 
yarn install
```
</code-block>

<code-block title="npm">
```bash
cd <project-name> 
npm install
```
</code-block>
</code-group>

### Configure replace_me

### Configure Vue Storefront

### Start the project

The project is now ready. You can start the application in development mode using the command below. You can read more about available commands and environments on the [Commands and deployment](https://nuxtjs.org/docs/2.x/get-started/commands/) page in Nuxt documentation.

<code-group>
<code-block title="yarn">
```bash 
yarn dev
```
</code-block>

<code-block title="npm">
```bash
npm run dev
```
</code-block>
</code-group>
