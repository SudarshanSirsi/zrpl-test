// To deccrypt the encrypted keyword from result.html using the private key
const fs = require('fs');
const path = require('path');
const { privateDecrypt } = require('crypto');

const decrypt = () => {
    //  To read the private key
  const privateKeyPath = path.join(__dirname, 'key-pairs', 'private-key.pem');
  const privateKey = fs.readFileSync(privateKeyPath, 'utf-8');
    // To Read the encrypted keyword form the result.html
  const resultHtmlPath = path.join(__dirname, 'result.html');
  const resultHtml = fs.readFileSync(resultHtmlPath, 'utf-8');

    // Extract the encrypted keyword from the result.html
  const encryptedKeywordRegex = /Encrypted: ([^\n]+)/;
  const encryptedKeywordMatch = resultHtml.match(encryptedKeywordRegex);
  const encryptedKeywordBase64 = encryptedKeywordMatch[1];
    // Decrypt the encrypted keyword using private Key
  const decrypted = privateDecrypt(privateKey, Buffer.from(encryptedKeywordBase64, 'base64'));
    // print the Decrypted
  console.log('Decrypted:', decrypted.toString('utf-8'));
    // Return the JSON object
  return {
    decrypted: decrypted.toString('utf-8')
  };
};

module.exports = { decrypt };
