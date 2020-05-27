import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import classes from './PublicTreds.module.sass'
import LinkBtn from '../../UI/LinkBtn/LinkBtn'
import { getBoardsList } from '../../../store/actions/publicTredsActionCreators'
import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'

const PublicTreds = () => {
  const { loading, boardsList, error } = useSelector(
    state => state.publicTreds,
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBoardsList())
  }, [dispatch])

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
      </div>
      {loading ? (
        <LoaderContainer />
      ) : (
        <div className='p-4 mb-2'>
          {error && <p>Something is wrong <b>;(</b></p>}
          <Row>{renderBoards(boardsList)}</Row>
        </div>
      )}
    </Container>
  )
}

export default PublicTreds
