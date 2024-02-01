const express = require('express')
const ip = require('ip')
const app = express()
const port = process.env.PORT || 3000
var os = require('os');
const axios = require('axios');
app.set('trust proxy', true);
app.get('/', async (req, res) => {
    const networkInterfaces = os.networkInterfaces();

    // Find the IP address associated with the network interfaces
    const systemIP = Object.keys(networkInterfaces)
      .map(interfaceName =>
        networkInterfaces[interfaceName].find(
          iface => iface.family === 'IPv4' && !iface.internal
        )
      )
      .filter(Boolean)[0].address;
      const response = await axios.get('https://api.ipify.org?format=json');
      const publicIP = response.data.ip;
      console.log('Public IP address:', publicIP);
    console.log('System IP address:', systemIP);

    res.json({ipPac:ip.address(), remoteIP: req.socket.localAddress, reqIp: req.ip,networkInterfaces:networkInterfaces, systemIP:systemIP, ipifyIp:publicIP, trueProxy: `Client IP: ${req.ip}, Client IPs: ${req.ips}` })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))