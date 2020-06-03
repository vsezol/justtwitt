import styled from "styled-components"

export default styled.p`
  font-family: 'Roboto-Regular';
  font-size: 1rem;
  width: max-content;
  color: ${({theme}) => theme.errorColor};
  padding: 10px;
  border-radius: 5px;
  border: solid 2px ${({theme}) => theme.errorColor};
  margin: 10px;
`