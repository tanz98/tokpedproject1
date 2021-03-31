'use strict'

const ApiService = require('./Helper/ApiService.js')
const Env = use('Env')

class PokemonController {
	async getPokemonList({ request, response, view, session }) {
		let req = request.post()

		let getlistpokemon = await ApiService.getData(Env.get('API_GOA_HOST') + '/pokemon-species/?limit=' + req.limit +'&offset=' + req.offset, 'GET', {})
		let resultspokemon = []
		let pokemondata = getlistpokemon.results

		for(let x in pokemondata){
			let pokemondetail = await ApiService.getData(Env.get('API_GOA_HOST') + '/pokemon/'+pokemondata[x].name, 'GET', {})
			if(pokemondetail.code == '404'){
				resultspokemon.push({})
			} else {
				resultspokemon.push({
					id: pokemondetail.id,
					name: pokemondetail.name,
					image: pokemondetail.sprites.front_default,
					type: pokemondetail.types[0].type.name
				})
			}
		}

		return {
			code: '200',
			message: 'List Pokemon Ditemukan',
			data: {
				count: getlistpokemon.count,
				next: getlistpokemon.next,
				previous: getlistpokemon.previous,
				results: resultspokemon
			}
		}
	}

	async getPokemonDetail({ request, response, view, session }) {
		let req = request.post()

		let pokemondetail = await ApiService.getData(Env.get('API_GOA_HOST') + '/pokemon/'+req.name, 'GET', {})
		return {
			code: '200',
			message: 'Pokemon Detail Ditemukan',
			data: pokemondetail
		}
	}
}

module.exports = PokemonController