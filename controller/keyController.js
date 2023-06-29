const apikeygen = require('../api-key-gen');
const encrypt = require('../encrypt');
const decryption = require('../decrypt');

const generateKeyPair = (req, res) => {
  apikeygen.generateKey();
  res.json({ message: 'Key pairs generated successfully' });
};

const encryptKeyPair = (req, res) => {
  const encryptedObj = encrypt.encrypt(req.params.keyword);
  res.json(encryptedObj);
};

const decryptKeyPair = (req, res) => {
  const decryptedObj = decryption.decrypt();
  res.json(decryptedObj);
};

module.exports = { generateKeyPair, encryptKeyPair, decryptKeyPair };
