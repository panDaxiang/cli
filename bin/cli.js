#!/usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const create = require('../lib/create')

// program.version(require('../package.json').version).parse(process.argv)

program.option('-d, --debug', 'debug comd')

const question = [
  {
    name: 'name',
    message: '请输入项目名称？',
  }, {
    name: 'author',
    message: '请输入作者？',
  }
]


program.command('create').description('create a project').action((data) => {
  inquirer.prompt(question).then((res) => {
    create(res).then((data) => { console.log(data) })
  })
})

program.parse(process.argv)