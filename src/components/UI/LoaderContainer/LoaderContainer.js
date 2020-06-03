import React from 'react'
import Loader from '../Loader/Loader'
import styled from 'styled-components'

const LoaderContainer = styled.div`
  position: absolute;
  left: calc(50% - 80px / 2);
  top: calc(50% - 80px / 2);
  display: flex;
  justify-content: center;
`

export default () => {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  )
}
