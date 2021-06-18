import styled from 'styled-components';
import {device} from '../../theme/GlobalStyles';

export const HomeStyled = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

    .categories_block{
	display: flex;
	flex-direction:column;
    text-align: center;
	width: 40%;
	margin: 0 auto;
	transform: translateY(50%);

	.tags-btns-container{
		display: flex;
	}
}
	
`;


