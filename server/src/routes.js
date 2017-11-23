const rcswitch = require('rcswitch')
const express = require('express')

const routes = express()

rcswitch.enableTransmit(4)

routes.post('/switch', function (req, res) {
  const {state, unitCode, systemCode} = req.body
 
  if (state && unitCode && systemCode) {
    const switchMethod = +state ? 'switchOn' : 'switchOff'

    rcswitch[switchMethod](systemCode, +unitCode)
    res.send(`Switched ${+state ? 'on' : 'off'}!`)
  } else {
    res.sendStatus(400)
  }
})

module.exports = routes
