import { Injectable } from '@angular/core';
var CryptoJS = require('crypto-js');

@Injectable({
  providedIn: 'root',
})
export class EncrDecrServiceService {
  secret: string = 'U2FsdGVkX1/7Iu4keisso5JGjrk9lKBLYrHnewcSNRw=';
  constructor() {
    console.log(this.encrypt('ohuera'));
  }

  encrypt(text: string) {
    let ciphertext = CryptoJS.AES.encrypt(text, this.secret).toString();
    return ciphertext;
  }

  decrypt(encryptedText: string) {
    // Decrypt
    let ciphertext = CryptoJS.AES.encrypt(
      encryptedText,
      this.secret
    ).toString();

    var bytes = CryptoJS.AES.decrypt(ciphertext, this.secret);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }
}
