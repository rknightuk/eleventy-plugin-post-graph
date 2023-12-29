const postGraph = require('../')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = (eleventyConfig, options = {}) => {
    eleventyConfig.addCollection('posts', (collectionApi) => {
        return collectionApi.getFilteredByGlob("./posts/**/*.md")
    })

    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addPassthroughCopy('assets')
    
    eleventyConfig.addPlugin(postGraph, {
        selectorDark: '.dark',
        yearLink: '/posts/{{year}}',
    })
}