const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes')

const portNumber = 3000

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.use('/api', routes)

app.listen(portNumber)

console.log(`Running on port ${portNumber}`)
