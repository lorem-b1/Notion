const express = require('express')
const getInfo = require('./services/notion')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static('aloud'))

app.get('/produtos', async (req, res) => {
	const produtos = await getInfo()
	res.json(produtos) 

})

app.listen(PORT, console.log(`Server started on port ${PORT}`))