const express = require('express');
const { generateKeyPair, encryptKeyPair, decryptKeyPair } = require('./controller/keyController');

const app = express();
const port = 5000;

app.get('/gen', generateKeyPair);
app.post('/gen/:keyword', encryptKeyPair);
app.get('/gen/decrypt', decryptKeyPair);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
