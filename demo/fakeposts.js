const fs = require('fs')
const faker = require('@faker-js/faker').faker

for (const x of Array(200).keys()) {
    const title = faker.lorem.sentence({ min: 3, max: 6 }).replace('.', '')
    const slug = faker.helpers.slugify(title).toLowerCase()
    const date = faker.date.between({ from: '2023-01-01T00:00:00.000Z', to: '2023-12-31T00:00:00.000Z' })

    const post = `---
title: "${title}"
date: ${date.toISOString()}
permalink: "/${slug}/"
---`

    fs.writeFileSync(`./posts/${slug}.md`, post)
}
