import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { css } from '@emotion/css'
import Head from '../components/head'
import Header from '../components/header'
import InfiniteScroll from 'react-infinite-scroll-component'

const pokemonConfig = require('../config')

const PokemonListPage = props => {
    const [mypokemonlist, setMyPokemonList]= useState([])

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
        setMyPokemonList(parsemypokemon)
    }, []);

	return (
        <React.Fragment>
            <Head />
            <Header iscatch={true} />
            <div className={listpokemon}>
                <div className="row">
                    {mypokemonlist.map((data, i) => {
                        return (
                            <div className="col-6 mb-3" key={i}>
                                <Link href={"/pokemondetail?name=" + data.name} as={"/pokemondetail?name=" + data.name} passHref>
                                    <a className="card">
                                        <img className="border-bottom p-2" src={data.image} />
                                        <span className={textcard}>{data.name}</span>
                                    </a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
			</div>
        </React.Fragment>
	)
}

export default PokemonListPage