import React, { Component } from 'react'
import classes from './PopularTreds.module.sass'

class PopularTreds extends Component {
  state = {
    treds: [
      {
        id: 1,
        views: 666,
        date: new Date(),
        title: 'Гена Горин разорвал жопу табуреткой...',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur iste quis iusto, ad fugit quaerat molestias soluta voluptates officiis recusandae doloribus impedit laudantium odit ipsa quos laborum cumque quia!',
        comments: [
          {
            id: 1,
            text: 'Что за херь?'
          },
          {
            id: 2,
            text: 'Авчом смысол?'
          }
        ]
      },
      {
        id: 2,
        views: 775,
        date: new Date(),
        title: 'Карантин продлили до 25 января...',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur iste quis iusto, ad fugit quaerat molestias soluta voluptates officiis recusandae doloribus impedit laudantium odit ipsa quos laborum cumque quia!',
        comments: [
          {
            id: 1,
            text: 'Наконец-то поботаю )'
          },
          {
            id: 2,
            text: 'ХМ, не смешно!'
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div className={classes['popular-treds']}>
        {this.state.treds.map((tred, tredIndex) => (
          <div key={tredIndex} className={classes['popular-treds__tred']}>
            
            <h2 className={classes['tred__title']}>{tred.title}</h2>

            <div className={classes['tred__stats']}>
              <div className={classes['tred__stats__views']}>views: {tred.views}</div>
              <div className={classes['tred__stats__id']}>id: {tred.id}</div>
              <div className={classes['tred__stats__date']}>date: {tred.date.toDateString()}</div>
            </div>
            
            <div className={classes['tred__text']}>{tred.text}</div>
            <div className={classes['tred__comments']}>
              {tred.comments.map((comment, commentIndex) => (
                <div>{comment.text}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default PopularTreds
