import React from 'react'

export default text =>
  text.split('\n').map((item, key) => {
    return (
      <React.Fragment key={key}>
        {item}
        <br />
      </React.Fragment>
    )
  })
