const { generateKeyPairSync } = require('crypto');
const fs = require('fs');
const path = require('path');

const generateKey = () => {
    // Generate Key pairs
  const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
  });

  const keyDir = path.join(__dirname, 'key-pairs');
  fs.writeFileSync(path.join(keyDir, 'private-key.pem'), privateKey);
  fs.writeFileSync(path.join(keyDir, 'public-key.pem'), publicKey);

//   Store them in key-gen.html
  const keyFilePath = path.join(keyDir, 'key-gen.html');

  const keyHtml = `
    <html>
      <body>
        <p>Private Key:</p>
        <pre>${privateKey}</pre>
        <p>Public Key:</p>
        <pre>${publicKey}</pre>
      </body>
    </html>`;

  fs.writeFileSync(keyFilePath, keyHtml);

  console.log('Key pairs generated and saved successfully!');
};

module.exports = { generateKey };
