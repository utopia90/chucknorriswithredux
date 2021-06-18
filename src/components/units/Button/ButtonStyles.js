import styled, { css } from 'styled-components'
import Colors from '../../../theme/Colors'


export const ButtonPrimaryStyled = styled.button`
  background:  ${Colors.mainColor};
  border-radius: 3px;
  border: 2px solid  ${Colors.mainColor};
  color:   ${Colors.white};
  margin: 0.5em 1em;
  padding: 0.25em 1em;



  &:hover{
      cursor: pointer;
      background:   ${Colors.white};
      color:  ${Colors.mainColor};
  }
`;

export const ButtonSecondaryStyled = styled.button`
  background: "transparent";
  border-radius: 3px;
  border: 2px solid  ${Colors.mainColor};
  color:   ${Colors.mainColor};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  max-width: 8rem;
  min-width: 10rem;

  &:hover{
      cursor: pointer;
  }
`;