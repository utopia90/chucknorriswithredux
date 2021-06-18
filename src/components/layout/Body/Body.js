import React from 'react';
import Header from '../Header/Header';
import {BodyStyled} from './Bodystyles';

function Body({children}) {
	return (
		<BodyStyled>
			<Header />
			{children}
		</BodyStyled>
	);
}

export default Body;