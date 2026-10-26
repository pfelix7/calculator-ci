const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
fs.mkdirSync(output, { recursive: true });
fs.copyFileSync(
path.join(root, 'calculator.js'),
path.join(output, 'calculator.js')
);
fs.writeFileSync(
path.join(output, 'README.txt'),
'Calculator release\n' +
'Use calculateTotal(quantity, unitPrice).\n'
);
console.log('Release files created in dist/');