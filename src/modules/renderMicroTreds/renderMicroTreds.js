import React from 'react'
import MicroTred from '../../components/class/Tred/MicroTred/MicroTred'

export default treds =>
  treds.map((tred, index) => {
    const id = tred[0]
    const data = tred[1]
    return <MicroTred key={index} tred={{ id, ...data }} />
  })