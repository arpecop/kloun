import path from 'path'

/* eslint-disable func-names */
const PouchDB = require('pouchdb')

const Db = PouchDB.defaults({
  prefix: `${path.resolve(process.cwd(), 'src', 'data', 'db')}/`,
  skip_setup: false,
})

export const jokes = new Db('jokes')
// test
