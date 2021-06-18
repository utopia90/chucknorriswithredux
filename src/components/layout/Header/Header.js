import React from 'react';
import {Container} from '../../../theme/GlobalComponents';
import {HeaderStyled} from './Headerstyles';
import { Link } from "react-router-dom"

function Header() {
	return (
		<Container>
			<HeaderStyled>
				<div className="logo"><Link  className="header-link" to="/">CHUCK NORRIS QUOTES</Link></div>
				<Link className="header-link"to="/favouritequotes">See favourite quotes</Link>
				<Link className="header-link"to="/quotebyquery">Search Quote By Query</Link>


				<ul className="menu">
					<li>
						<a href="/acceder">Sign up</a>
					</li>
					<li>
						<a href="/registrarse">Sign In</a>
					</li>
				</ul>
			</HeaderStyled>
		</Container>
	);
}

export default Header;
