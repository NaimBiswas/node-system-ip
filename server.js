const express = require('express')
const ip = require('ip')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json({ipPac:ip.address(), remoteIP: req.socket.localAddress, reqIp: req.ip, })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))