const dotenv = require('dotenv').config()
const {Client} = require('@notionhq/client')

const notion = new Client ({
    auth: process.env.NOTION_TOKEN
})

const database_id = process.env.NOTION_DATABASE_ID

module.exports = async function getInfo() {
    const payload = {
        path: `databases/${database_id}/query`,
        method: 'POST'
    }

    const {results} = await notion.request(payload)

    const produtos = results.map((page) => {
        console.log(page.properties.Number.number)

        return {
            id: page.id,
            title: page.properties.Produto.title[0].text.content,
            tags: page.properties.Tags.multi_select[0].name,
            price: page.properties.Number.number
        }
    })

    return produtos

}