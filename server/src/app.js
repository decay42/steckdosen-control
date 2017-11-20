const express = require('express')
const rcswitch = require('rcswitch')

const portNumber = 3000

rcswitch.enableTransmit(4)

const app = express()

app.listen(portNumber)

console.log(`Running on port ${portNumber}`)

app.get('/switch/:systemCode/:unitCode/:state', function (req, res) {
  const switchMethod = +req.params.state ? 'switchOn' : 'switchOff'

  rcswitch[switchMethod](req.params.systemCode, +req.params.unitCode)

  res.send(`Switched ${+req.params.state ? 'on' : 'off'}!`)
})
