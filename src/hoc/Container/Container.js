import React from 'react'
import styled from 'styled-components'
import { minSm, minMd, minLg, minXl } from '../../styled/grid'

const Container = styled.div`
  margin: 0 auto;
  padding: 10px;
  @media screen and (min-width: ${minSm}px) {
    max-width: 540px;
  }
  @media screen and (min-width: ${minMd}px) {
    max-width: 720px;
  }
  @media screen and (min-width: ${minLg}px) {
    max-width: 960px;
  }
  @media screen and (min-width: ${minXl}px) {
    max-width: 1140px;
  }
`

export default ({ children }) => {
  return <Container>{children}</Container>
}
