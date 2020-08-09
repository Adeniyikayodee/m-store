const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.send('IDUO Woman E-Commerce Website in progress')
})

app.listen(3000, () => {
  console.log('Server running at port 3000')
})

module.exports = app
