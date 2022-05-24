const { resolve } = require("path")
const fs = require('fs')

const create = (options) => {
  const curCwd = resolve(__dirname)
  const source = curCwd.slice(0, -3)

  return new Promise((res, rej) => {
    fs.readFile(source + 'package.json', (err, data) => {
    if(err) {
      return rej(err)
    }

    const { name, author} = options
    console.log(data)

    

  })
  })

  
}

module.exports = create