import styled from 'styled-components';
import Colors from "../../../theme/Colors";

export const HeaderStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding-top: 20px;
	padding-bottom: 20px;
	width: 98%;
	background: ${Colors.mainColor};
    
	.header-link{
		text-decoration:none;
		font-weight:bold;
		color: ${Colors.white}
	}
	.menu {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;		

		li {
			text-decoration:none;
			a {
				color: ${Colors.white};
				text-decoration: none;
			}

			&:last-child {
				margin-left: 1rem;
			}
		}
	}
`;
