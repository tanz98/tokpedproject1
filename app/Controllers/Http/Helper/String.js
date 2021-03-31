'use strict'

const Env = use('Env')

class String {
	async formatRupiah(currency) {
		let x = parseFloat(currency)
		if (x) {
			return 'Rp. '+ x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
		} else {
			return 'Rp. 0'
		}
	}
}

module.exports = new String