'use strict'

const crypto = require('crypto')
const CryptoJS = require('crypto-js')
const Env = use('Env')

class Hash {
	async encrypt(data) {
		let cipher = crypto.createCipher('aes-256-cbc', Env.get('APP_KEY'))
		let crypted = cipher.update(data, 'utf-8', 'hex')
		crypted += cipher.final('hex')

		return crypted
	}

	async decrypt(data) {
		let decipher = crypto.createDecipher('aes-256-cbc', Env.get('APP_KEY'))
		let decrypted = decipher.update(data, 'hex', 'utf-8')
		decrypted += decipher.final('utf-8')

		return decrypted
	}
	
	async decryptSdk(data) {
		let key = CryptoJS.enc.Utf8.parse('F18AB33A57F9B229CC9C250D00FC3273')
		let iv = CryptoJS.enc.Utf8.parse('D959B836CD9FB162')
		let decipher = CryptoJS.AES.decrypt(data, key, {
			iv: iv,
			mode: CryptoJS.mode.CTR
		});
		decipher = decipher.toString(CryptoJS.enc.Utf8)

		return decipher
	}
}

module.exports = new Hash