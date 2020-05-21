import React from 'react'

export default text =>
  text.split('\n').map((item, key) => (
    <React.Fragment key={key}>
      {item}
      <br />
    </React.Fragment>
  ))