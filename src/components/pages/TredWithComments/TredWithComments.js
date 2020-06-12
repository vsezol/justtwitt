import React from 'react'
import Tred from '../../class/Tred/Tred'
import Comments from '../../class/Comments/Comments'
import Container from '../../../hoc/Container/Container'

const TredWithComments = props => {
  return (
    <Container>
      <Tred {...props} /> <Comments {...props} />
    </Container>
  )
}

export default TredWithComments
