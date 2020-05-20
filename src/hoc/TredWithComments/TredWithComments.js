import React from 'react'
import Tred from '../../components/class/Tred/Tred'
import Comments from '../../components/class/Comments/Comments'

const TredWithComments = props => {
  return (
    <>
      <Tred {...props} /> <Comments {...props} />
    </>
  )
}

export default TredWithComments
