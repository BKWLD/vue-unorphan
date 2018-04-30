# vue-unorphan

A Vue directive that implements [unorphan](https://github.com/rstacruz/unorphan).

## Install

`yarn add unorphan or npm install --save unorphan`

#### Vue

```js
Vue = require('vue')
Vue.directive('unorphan', require('vue-unorphan'))
```

#### Nuxt

In `nuxt.config.js`:

```js
{
  modules: [ 'vue-unorphan/nuxt/module' ]
}
```

## Usage

Use in a Vue template like:

```html
<h1 v-unorphan>A long title with many words that will wrap to multiple lines</h1>
```

## Example

Before:

![](http://yo.bkwld.com/2z0v35071m0F/Image%202018-04-30%20at%204.18.46%20PM.png)

After:

![](http://yo.bkwld.com/423M193i352i/Image%202018-04-30%20at%204.27.27%20PM.png)
