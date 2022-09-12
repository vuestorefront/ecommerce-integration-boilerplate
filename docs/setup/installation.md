# Installation

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

::: warning
CLI will use the project name you enter to create a new directory, so avoid using special characters and spaces.
:::

### Install dependencies

Go to the newly created directory and install the required dependencies:

<code-group>
<code-block title="YARN">
```bash
cd <project-name> 
yarn install
```
</code-block>

<code-block title="NPM">
```bash
cd <project-name> 
npm install
```
</code-block>
</code-group>

### Configure __replace_me__

### Configure Vue Storefront

### Start the project

The project is now ready. You can start the application in development mode using the command below. You can read more about available commands and environments on the [Commands and deployment](https://nuxtjs.org/docs/2.x/get-started/commands/) page in Nuxt.js documentation.

<code-group>
<code-block title="YARN">
```bash 
yarn dev
```
</code-block>

<code-block title="NPM">
```bash
npm run dev
```
</code-block>
</code-group>


## Recommended tools

Below are the tools we use to make the development and debugging easier, and we recommend you use them too.

### Vue.js Devtools

We strongly recommend installing [Vue.js Devtools](https://devtools.vuejs.org/guide/installation.html) in your browser. It's an excellent tool for viewing component structures and their current state, inspecting events, routes, and much more.

### Vetur for VS Code

For those using Visual Studio Code as their primary code editor, we also recommend using [Vetur extension](https://marketplace.visualstudio.com/items?itemName=octref.vetur).

It speeds up the development of Vue.js-based applications by providing features like Vue.js code autocompletion and syntax highlighting.
