import styled from 'styled-components'

export default styled.div`
  margin-bottom: 10px;
  padding: ${({ padding }) => (padding ? padding : '20px')};
  background: ${({ theme }) => theme.tredBg};
  border-radius: 5px;
`
