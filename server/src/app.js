const express = require('express')
const rcswitch = require('rcswitch')
const cors = require('cors')
const bodyParser = require('body-parser')

const portNumber = 3000

rcswitch.enableTransmit(4)

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.listen(portNumber)

console.log(`Running on port ${portNumber}`)

app.post('/switch', function (req, res) {
  const {state, unitCode, systemCode} = req.body

  const switchMethod = +state ? 'switchOn' : 'switchOff'

  rcswitch[switchMethod](systemCode, +unitCode)
  res.send(`Switched ${+state ? 'on' : 'off'}!`)
})
