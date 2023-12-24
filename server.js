const express = require('express')
const ip = require('ip')
const app = express()
const port = 3000
var os = require('os');

app.get('/', (req, res) => {
    var networkInterfaces = os.networkInterfaces();
    console.log(networkInterfaces);

    res.json({ipPac:ip.address(), remoteIP: req.socket.localAddress, reqIp: req.ip,networkInterfaces:networkInterfaces })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))