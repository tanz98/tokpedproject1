import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { css } from '@emotion/css'
import Head from '../components/head'
import Header from '../components/header'
import InfiniteScroll from 'react-infinite-scroll-component'

const pokemonConfig = require('../config')

const PokemonListPage = props => {
    const [pokemonlist, setPokemonList]= useState([])
	const [emptypokemon, setIsEmptyPokemon]= useState(false)
	const [limit, setLimit]= useState(20)
	const [offset, setOffset]= useState(0)
	const [hasMoreItems, setHasMoreItems] = useState(true);

	//Styles
    const listpokemon = css`
  		padding: 16px 25px;
	`
	const textcard = css`
		margin: 3px 6px 6px 6px;
        font-size: 14px;
		color: black;
	`

    useEffect(() => {
		let mypokemon = localStorage.getItem('savepokemon')
		let parsemypokemon = JSON.parse(mypokemon)
		console.log(parsemypokemon)
		getRefresh()
    }, []);

	function getRefresh(){
		axios({
			url: pokemonConfig.BASE_URL + '/api/getlistpokemon',
			method: 'POST',
			data: {
				limit: limit,
				offset: offset
			},
			timeout: pokemonConfig.TIMEOUT
		}).then(function (response) {
			if(response.data.code == '200') {
				setPokemonList(response.data.data.results)
				if(response.data.data.next != null){
					setOffset(20)
					setHasMoreItems(response.data.data.results.length > 4 ? true : false)
				}
			} else {
				setIsEmptyPokemon(true)
			}
		})
	}

	function getHandleLoadMore(){
		axios({
			url: pokemonConfig.BASE_URL + '/api/getlistpokemon',
			method: 'POST',
			data: {
				limit: limit,
				offset: offset
			},
			timeout: pokemonConfig.TIMEOUT
		}).then(function (response) {
			if(response.data.code == '200') {
				let lists = pokemonlist.concat(response.data.data.results)
				let cutemptylist = lists.filter(value => Object.keys(value).length !== 0)
				setPokemonList(cutemptylist)
				setOffset(offset + 20)
			} else {
				setIsEmptyPokemon(true)
			}
		})
	}

	return (
		<React.Fragment>
			<Head />
			<Header />
			<div className={listpokemon}>
				<InfiniteScroll
					dataLength={pokemonlist}
					next={getHandleLoadMore}
					hasMore={hasMoreItems}
					loader={<h6>Loading...</h6>}
					endMessage={<div className="alert alert-light text-center small">Semua data telah ditampilkan</div>}
					refreshFunction={getRefresh}
					pullDownToRefresh
					pullDownToRefreshContent={<div className="alert alert-light text-center small">&#8595; Pull down to refresh</div>}
					releaseToRefreshContent={<div className="alert alert-light text-center small">&#8593; Release to refresh</div>}
				>
					<div className="row">
						{pokemonlist.map((data, i) => {
							return (
								<div className="col-6 mb-3" key={i}>
                                    <Link href={"/pokemondetail?name="+ data.name} as={"/pokemondetail?name="+ data.name} passHref>
                                        <a className="card">
                                            <img className="border-bottom p-2" src={data.image} />
                                            <span className={textcard}>{data.name}</span>
                                            <span className={textcard}>{data.type}</span>
                                        </a>
                                    </Link>
								</div>
							)
						})}
					</div>
				</InfiniteScroll>
			</div>
		</React.Fragment>
	)
}

export default PokemonListPage