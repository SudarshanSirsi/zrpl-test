const { generateKeyPairSync } = require('crypto');
const fs = require('fs');

const path = require('path');

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
})

const keyDir = path.join(__dirname, 'key-pairs');
fs.writeFileSync(path.join(keyDir, 'private-key.pem'), privateKey);
fs.writeFileSync(path.join(keyDir, 'public-key.pem'), publicKey);

const keyFilePath = path.join(keyDir, 'key-gen.html');

const keyHtml = ` <html>
    <body>
        <p>Private Key:<br></br> 
            ${privateKey}</p>
        <p>Public Key: <br></br> 
            ${publicKey}</p>
    
    </body>
</html>`;

fs.writeFileSync(keyFilePath, keyHtml);

console.log('key-pairs generated and saved successfully!!');