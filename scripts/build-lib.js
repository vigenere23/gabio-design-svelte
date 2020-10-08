/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const process = require('child_process')

const libPath = path.join(__dirname, '../lib')

fs.rmdir(libPath, { recursive: true }, () => {
  process.exec('tsc -p src/lib', (err) => {
    if (err) throw err
  })
})
