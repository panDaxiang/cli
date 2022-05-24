const fs = require('fs')
const path = require('path')

const create = (options) => {
  const rootPath = path.resolve(__dirname, '').slice(0, -3)
  const json = require('../package.json')

  return new Promise((res, rej) => {
    const filePath = rootPath + 'package.json';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        return rej(err)
      }

      const { name, author } = options

      let dataString = data.toString()

      // console.log(oldName, oldAuthor)
      json.name = name
      json.author = author

      // dataString.replace( new RegExp(oldName, 'gi') , name)
      // dataString.replace( new RegExp(oldAuthor, 'gi'), author)

      fs.writeFile(filePath, Buffer.from(json), (err, data) => {
        if (err) {
          return rej(err)
        }

        res(data)
      })
    })
  })
}

module.exports = create