import React from 'react'
import Tred from '../../components/class/Tred/Tred'
import Comments from '../../components/class/Comments/Comments'
import Container from '../Container/Container'

const TredWithComments = props => {
  return (
    <Container>
      <Tred {...props} /> <Comments {...props} />
    </Container>
  )
}

export default TredWithComments
