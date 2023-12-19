# eleventy-plugin-post-graph

Generate Github-style post distribution graph for your blog posts in Eleventy

![](screenshot.png)

## Basic Usage

Install the package

```bash
npm install @rknightuk/eleventy-plugin-post-graph --save-dev
```

In your Eleventy config:

```js
const postGraph = require('@rknightuk/eleventy-plugin-post-graph')

module.exports = (eleventyConfig, options = {}) => {
    eleventyConfig.addPlugin(postGraph)
}
```

In your template, use the shortcode and pass it your posts collection:

```njk
{% postGraph collections.posts %}
```

## Advanced Usage and Options

[See the docs](https://postgraph.rknight.me)