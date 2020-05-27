import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from '../../../axios/customAxios'

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
      <Col sm={2} key={index}>
        <Link to={`/public/${boards[name]}`}>{name}</Link>
      </Col>
    ))
  return (
    <Container>
      <Row>{!!boards && renderBoards(boards)}</Row>
    </Container>
  )
}

export default PublicTreds
