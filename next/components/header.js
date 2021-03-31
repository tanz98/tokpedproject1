import Link from 'next/link'
import { css } from '@emotion/css'

const Header = props => {
	//Styles
    const header = css`
  		background-color: #3269a8;
        padding: 10px;
        display: flex;  
    `
    const navlistheader = css`
        margin: 0px 5px;
        color: white !important;
    `

    return(
        <header className={header}>
            <div className="col-sm-4 col-md-3 p-0">
                <Link href={"/"} as={"/"} passHref>
                    <img src="/static/pokemon-theme/img/pokecatch-logo.png" width="150" />
                </Link>
            </div>
            <div className="col-sm-8 col-md-9 p-0 text-right">
                {props.iscatch == true ?
                    <Link href={"/"} as={"/"} passHref>
                        <a className={navlistheader}>Catch Pokemon</a>
                    </Link>
                    :
                    <Link href={"/mypokemon"} as={"/mypokemon"} passHref>
                        <a className={navlistheader}>My Pokemon</a>
                    </Link>
                }
            </div>
        </header>
    )
}

export default Header