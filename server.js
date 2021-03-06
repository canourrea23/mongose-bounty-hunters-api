const cors = require('cors')
const express = require('express')
const app = express()
require('dotenv').config()

app.use(cors({ origin: '*'}))
app.use(express.urlencoded())
app.use(express.json())

const models = require('./models')

app.get('/', (req, res) => {
  res.send('hello from root')
})

app.use('/bounties', require('./controllers/bountiesController'))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
})