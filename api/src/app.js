const express = require('express')

const app = express()

app.get('/ping', (req, res) => {
	res.json({ message: 'pong' })
})

app.get('/movies', (req, res) => {
	res.json([
		{ id: 1, title: 'The Shawshank Redemption', year: 1994 },
		{ id: 2, title: 'The Godfather', year: 1972 },
		{ id: 3, title: 'The Godfather: Part II', year: 1974 },
		{ id: 4, title: 'The Dark Knight', year: 2008 },
	])
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('Server running on port ' + PORT))