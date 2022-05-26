/**
 * Use this file to register any variables or functions that should be available globally
 * ideally you should make it available via the window object
 * as well as the Vue prototype for access throughout the app
 * (register globals with care, only when it makes since to be accessible app wide)
*/

// I recommend you to change the key 🧠
const CRYPTO_JS_KEY = "RANDOM_KEY";

function encryptData(data) {
  let encryptedData = window.CryptoJS.AES.encrypt(JSON.stringify(data), CRYPTO_JS_KEY);
  return encryptedData.toString();
}

function decryptData(encryptedData){
  return window.CryptoJS.AES.decrypt(encryptedData.replace(/\s/g, '+'), CRYPTO_JS_KEY).toString(window.CryptoJS.enc.Utf8)
}

window.encryptData = encryptData;
window.decryptData = decryptData;