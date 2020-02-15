
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-input.cjs.production.min.js')
} else {
  module.exports = require('./react-input.cjs.development.js')
}
