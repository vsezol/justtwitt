import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from '../../../axios/customAxios'
import classes from './PublicTreds.module.sass'
import LinkBtn from '../../UI/LinkBtn/LinkBtn'

const PublicTreds = () => {
  const [boards, setBoards] = useState(null)

  useEffect(() => {
    const getBoards = async () => {
      const response = await axios.get('/boards.json')
      setBoards(response.data)
    }
    getBoards()
  }, [])

  const renderBoards = boards =>
    Object.keys(boards).map((name, index) => (
      <Col xs={6} sm={4} md={3} lg={2} key={index} className='p-2'>
        <LinkBtn to={boards[name]}>{name}</LinkBtn>
      </Col>
    ))
  return (
    <Container>
      <div className='pt-4'>
        <h1 className={classes.PublicTreds__Title + ' m-0'}>Публичные треды</h1>
        <div className={classes.PublicTreds__Logo}></div>
      </div>
      <div className='p-4 mb-2'>
        <Row>{!!boards && renderBoards(boards)}</Row>
      </div>
    </Container>
  )
}

export default PublicTreds
