import React from 'react'
import classes from '../Tred.module.sass'
import LinkBtn from '../../../UI/LinkBtn/LinkBtn'

import Stats from '../../../func/Stats/Stats'

const MicroTred = props => {
  const limitText = text =>
    text.slice(0, 200).split(' ').slice(0, -1).join(' ') + '...'
  return (
    <div
      className={[
        classes.Tred,
        classes.Tred__Container,
        'mb-4 p-4 rounded'
      ].join(' ')}
    >
      <h2 className={classes.Tred__Title + ' mb-2'}>{props.tred.title}</h2>
      <div className={classes.Tred__Text + ' mb-2'}>
        {limitText(props.tred.text)}
      </div>
      <div
        className={
          classes.Tred__Stats +
          ' d-flex w-100 justify-content-start align-items-center flex-wrap justify-content-md-end flex-md-row-reverse'
        }
      >
        <div className='d-flex flex-wrap mb-2  mb-sm-0'>
          <Stats
            views={props.tred.views}
            board={props.tred.board}
            date={props.tred.date}
          />
        </div>
        <LinkBtn to={`/public/${props.tred.board}/${props.tred.id}/`} className='mr-md-auto'>Read more</LinkBtn>
      </div>
    </div>
  )
}

export default MicroTred
