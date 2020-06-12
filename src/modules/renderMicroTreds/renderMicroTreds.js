import React from 'react'
import MicroTred from '../../components/class/Tred/MicroTred/MicroTred'

export default treds =>
  treds.map(([id, data], index) => {
    return <MicroTred key={index} tred={{ id, ...data }} />
  })
