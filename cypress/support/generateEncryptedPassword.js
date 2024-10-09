const CryptoJS = require('crypto-js');

const plainPassword = 'secret_sauce';
const secretKey = 'fK9x2Lm7pQ3rZ8vY4wN6bT1cJ5hS0gA';

const encryptedPassword = CryptoJS.AES.encrypt(plainPassword, secretKey).toString();
console.log('Encrypted password:', encryptedPassword);