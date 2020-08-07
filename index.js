const express = require('express')
const app = express()

app.get('/', function (req, res) {
  return res.send('IDUO Woman E-Commerce Website in progress')
})

app.listen(3000, function () {
  console.log('Server running at port 3000')
})
