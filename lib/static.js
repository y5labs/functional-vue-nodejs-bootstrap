const inject = require('injectinto')
const path = require('path')
const express = require('express')

inject('pod', ({ app }) => {
  //app.use('/data', [express.static(path.join(__dirname, '../', 'data'))])
})