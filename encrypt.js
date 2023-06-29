const fs = require('fs');
const path = require('path');
const { publicEncrypt } = require('crypto');

const encrypt = (keyword) => {
    // Reading the public Key
  const publicKeyPath = path.join(__dirname, 'key-pairs', 'public-Key.pem');
  const publicKey = fs.readFileSync(publicKeyPath, 'utf-8');

    // Encrypt the keyword using the public key
  const encrypted = publicEncrypt(publicKey, Buffer.from(keyword, 'utf-8'));

    // print the input and output
  console.log('Input:', keyword);
  console.log('Encrypted:', encrypted.toString('base64'));

    // print and store it in a html file
  const resultHtml = `
    <html>
      <body>
        <h1>Encryption Result</h1>
        <p>Input: ${keyword}</p>
        <p>Encrypted: ${encrypted.toString('base64')}</p>
      </body>
    </html>
  `;

  fs.writeFileSync('result.html', resultHtml);

  console.log('Encryption completed successfully!');

  return {
    input: keyword,
    encrypted: encrypted.toString('base64')
  };
};

module.exports = { encrypt };