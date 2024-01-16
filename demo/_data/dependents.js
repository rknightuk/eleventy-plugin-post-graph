const { AssetCache } = require("@11ty/eleventy-fetch")
const { parseHTML } = require('linkedom')

module.exports = async function() {
    let asset = new AssetCache("dependants")

    if (asset.isCacheValid('1d'))
    {
        console.log("Returning dependants from cache" )
        return await asset.getCachedValue()
    }

    console.log("Loading dependants" )

    const res = await fetch('https://github.com/rknightuk/eleventy-plugin-post-graph/network/dependents')
    const html = await res.text()

    const { document } = parseHTML(html)

    const dependents = Array.from(document.querySelectorAll('#dependents .text-bold[data-hovercard-type]')).map((el) => {
        return {
            link: `https://github.com${el.href}`,
            name: el.href.replace('/','')
        }
    })

    await asset.save(dependents, "json")

    return dependents
}