const express = require('express')
const ip = require('ip')
const app = express()
const port = 3000
var os = require('os');

app.get('/', (req, res) => {
    const networkInterfaces = os.networkInterfaces();

    // Find the IP address associated with the network interfaces
    const systemIP = Object.keys(networkInterfaces)
      .map(interfaceName =>
        networkInterfaces[interfaceName].find(
          iface => iface.family === 'IPv4' && !iface.internal
        )
      )
      .filter(Boolean)[0].address;
    
    console.log('System IP address:', systemIP);

    res.json({ipPac:ip.address(), remoteIP: req.socket.localAddress, reqIp: req.ip,networkInterfaces:networkInterfaces })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))