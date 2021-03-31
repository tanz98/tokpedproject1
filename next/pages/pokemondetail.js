import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { css } from '@emotion/css'
import Head from '../components/head'
import Header from '../components/header'
import router from 'next/router'

const pokemonConfig = require('../config')

const PokemonDetailPage = () => {
	const [pokemonid, setPokemonId]= useState(0)
    const [pokemonname, setPokemonName]= useState('')
    const [pokemonsprites, setPokemonSprites]= useState('')
    const [pokemonabilities, setPokemonAbilities]= useState([])
    const [pokemonmoves, setPokemonMoves]= useState([])
	const [ispokemoncatch, setIsPokemonCatch]= useState(0)
	const [nickname, setNickname]= useState('')
	const [localdata, setLocalData]= useState([])

	//Styles
    const listpokemon = css`
  		padding: 16px 25px;
	`
	const moves = css`
		font-size: 12px;
		width: 50%;
	`

    useEffect(() => {
		let mypokemon = localStorage.getItem('savepokemon')
		let parsemypokemon = JSON.parse(mypokemon)
		setLocalData(parsemypokemon)
		getDetailPokemon(parsemypokemon)
    }, [ispokemoncatch, pokemonname]);

	function getDetailPokemon(mypokemon){
		axios({
			url: pokemonConfig.BASE_URL + '/api/getdetailpokemon',
			method: 'POST',
			data: {
				name: router.query.name,
			},
			timeout: pokemonConfig.TIMEOUT
		}).then(function (response) {
			if(response.data.code == '200') {
				let isowned = []
				
				if(localdata != null){
					 isowned = mypokemon.filter(x => x.id == response.data.data.id)
				}
				if(isowned.length > 0){
					setPokemonId(isowned[0].id)
					setPokemonName(isowned[0].name)
					setIsPokemonCatch(3)
				} else {
					setPokemonId(response.data.data.id)
					setPokemonName(response.data.data.name)
				}
				setPokemonSprites(response.data.data.sprites.front_default)
				setPokemonAbilities(response.data.data.abilities)
				setPokemonMoves(response.data.data.moves)
			} else {
				setIsEmptyPokemon(true)
			}
		})
	}

    function catchPokemon(){
        let probcatch = Math.random() < 0.5 ? 0 : 1;
		console.log(probcatch)
		if(probcatch == 1) {
			setIsPokemonCatch(1)
		} else {
			console.log('gadapet')
			setIsPokemonCatch(2)
		}
    }

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			if(localdata == null){
				let mypokemon = []
				let pushdata = {
					id: pokemonid,
					name: nickname != '' ? nickname : pokemonname,
					image: pokemonsprites
				}
				mypokemon.push(pushdata)
				localStorage.setItem('savepokemon', JSON.stringify(mypokemon))
			} else {
				let pushdata = {
					id: pokemonid,
					name: nickname != '' ? nickname : pokemonname,
					image: pokemonsprites
				}
				localdata.push(pushdata)
				console.log(localdata)
				localStorage.setItem('savepokemon', JSON.stringify(localdata))
			}

			setIsPokemonCatch(3)
			setPokemonName(nickname)
		}
	}

	return (
		<React.Fragment>
			<Head />
			<Header />
			<div className={listpokemon}>
				<a className="text-primary" onClick={e=> router.back()}>Back</a>
				<div className="text-center mb-3">
					<img className="img-fluid" src={pokemonsprites} /><br/>
					{ispokemoncatch == 1 && <input type="text" placeholder="enter nickname" value={nickname} onChange={e => setNickname(e.target.value)} onKeyDown={handleKeyDown} />}
					{ispokemoncatch == 2 && <p>Oops Pokemon not catch <a className="text-primary" onClick={e => setIsPokemonCatch(0)}>Try Again?</a></p>}
					{ispokemoncatch == 3 && <p>Pokemon Owned</p>}
					{ispokemoncatch == 0 && <button className="mb-2" onClick={e => catchPokemon()}>Catch</button>}
					<h3>{pokemonname}</h3>
				</div>

				<p>Abilites :</p>
				<div className="row pl-3 pr-3">
					{pokemonabilities.map((data, i) => {
						return (
							<p key={i} className={moves}>{data.ability.name}</p>
						)
					})}
				</div>
				
				<p>Moves :</p>
				<div className="row pl-3 pr-3">
					{pokemonmoves.map((data, i) => {
						return (
							<p key={i} className={moves}>{data.move.name}</p>
						)
					})}
				</div>
			</div>
		</React.Fragment>
	)
}

export default PokemonDetailPage