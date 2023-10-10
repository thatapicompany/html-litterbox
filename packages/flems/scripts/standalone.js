const fs = require('fs');
const path = require('path');

const main = fs.readFileSync('dist/flems.js', 'utf8')
    , runtime = fs.readFileSync('dist/runtime.html', 'utf8')

const filePath = path.resolve(__dirname, '../../app/public')
fs.writeFileSync(`${filePath}/flems.html`, [
  '/*',
  runtime,
  '<!-- */',
  main + '// -->'
].join('\n'))
