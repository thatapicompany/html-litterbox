const csso = require('csso')
    , fs = require('fs')
const path= require("path");

const sheets = [
  'node_modules/codemirror/lib/codemirror.css',
  'src/editor/material.css',
  'node_modules/codemirror/addon/fold/foldgutter.css',
  'node_modules/codemirror/addon/dialog/dialog.css'
]

module.exports = csso.minify(
  sheets
  .map(f =>
    fs.readFileSync(f.startsWith('node_modules') ? path.resolve(__dirname, `../../../${f}`) : f, 'utf8')
      .replace('\\25BE', '▾')
      .replace('\\25B8', '▸')
  )
  .join('')
).css
