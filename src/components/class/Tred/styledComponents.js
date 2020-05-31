import styled from 'styled-components'
import { minMd } from '../../../styled/grid'

export const Title = styled.h2`
  margin: 0px;
  padding: 0px;
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-family: 'Roboto-Regular';
  color: ${({ theme }) => theme.textColor};
`

export const Preview = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;
  font-family: 'Roboto-Regular';
  color: ${({ theme }) => theme.textColor};
`

export const Text = styled.div`
  font-size: 1rem;
  font-family: 'Roboto-Regular';
  color: ${({ theme }) => theme.textColor};
`

export const InfoPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  flex-direction: row;

  @media screen and (min-width: ${minMd}px) {
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`

export const StatsContainer = styled.div`
  display: block;
  margin: 5px;
`
