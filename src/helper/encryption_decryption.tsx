import CryptoJS from 'crypto-js';

export const encrypt=(text:any) =>{
    var key = CryptoJS.enc.Utf8.parse("203199320052021");
    var iv = CryptoJS.enc.Utf8.parse("1203199320052021");
    console.log(key,'key', iv,"iv");
    text = JSON.stringify(text)
    var encrypted = CryptoJS.AES.encrypt(text, iv, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    let data = {
        data:  encrypted.toString()
      }
      var encryptData = JSON.stringify(data)
      return encryptData;

  }