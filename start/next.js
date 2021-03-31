'use strict'

const Route = use('Route')
const Next = use('Adonis/Addons/Next')
const handler = Next.getRequestHandler()

Route.get('/', ({ request, response }) => {
	const query = request.get()
	return Next.render(request.request, response.response, '/pokemonlist', query)
})

Route.get('/pokemondetail', ({ request, response }) => {
	const query = request.get()
	return Next.render(request.request, response.response, '/pokemondetail', query)
})

Route.get('/mypokemon', ({ request, response }) => {
	const query = request.get()
	return Next.render(request.request, response.response, '/mypokemon', query)
})