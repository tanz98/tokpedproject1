'use strict'

const Route = use('Route')
const Next = use('Adonis/Addons/Next')
const handler = Next.getRequestHandler()

Route.get('/api', ({ request, response }) => {
	response.header('Content-type', 'application/json')
	response.type('application/json')
	let data = {
		title: 'Welcome to Pokemon World',
		description: 'Pokemon API Services for PWA',
		version: '1.0',
		copyright: 'Tannuru Marthamurtadha'
	}
	return response.send(data)
})

//Adonis Routes Controller
Route.post('/api/getlistpokemon', 'PokemonController.getPokemonList')
Route.post('/api/getdetailpokemon', 'PokemonController.getPokemonDetail')

//Next Js Routes
require('./next.js')

Route.get('*', ({ request, response }) =>
	new Promise((resolve, reject) => {
		handler(request.request, response.response, promise => {
			promise.then(resolve).catch(reject)
		})
	})
)
