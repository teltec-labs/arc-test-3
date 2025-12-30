// generate-file.js
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// Gerar hash aleatório
const hash = crypto.randomBytes(8).toString('hex');

// Nome do arquivo
const fileName = `file-${hash}.txt`;

// Conteúdo do arquivo
const content = `Generated file
Hash: ${hash}
Timestamp: ${new Date().toISOString()}
Random number: ${Math.random()}
`;

// Criar arquivo
fs.writeFileSync(fileName, content);

console.log(`✅ File created: ${fileName}`);
console.log(`📍 Full path: ${path.resolve(fileName)}`);
