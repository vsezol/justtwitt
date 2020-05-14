import React, { Component } from 'react'
import classes from './PopularTreds.module.sass'
import { Container } from 'react-bootstrap'
import MicroTred from '../Tred/MicroTred/MicroTred'

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
      <div className={classes.PopularTreds}>
        <Container>
          <div className='pt-4 pb-4'>
            <h1 className={classes.PopularTreds__Title + ' m-0'}>Популярные треды</h1>
          </div>

          {this.state.treds.map((tred, index) => (
            <MicroTred key={index} tred={tred} />
          ))}
        </Container>
      </div>
    )
  }
}

export default PopularTreds
