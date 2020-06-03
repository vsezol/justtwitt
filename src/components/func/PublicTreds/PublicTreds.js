import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { getBoardsList } from '../../../store/actions/publicTredsActionCreators'

import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import Container from '../../../hoc/Container/Container'
import LinkBtn from '../../UI/LinkBtn/LinkBtn'
import PageTitle from '../../UI/PageTitle/PageTitle'
import styled from 'styled-components'

const BoardsGrid = styled.div`
  display: grid;
`

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
      <div xs={6} sm={4} md={3} lg={2} key={index} className='p-2'>
        <LinkBtn to={boards[name]}>{name}</LinkBtn>
      </div>
    ))

  return (
    <Container>
      <PageTitle>Публичные треды</PageTitle>
      {loading ? (
        <LoaderContainer />
      ) : (
        <BoardsGrid>
          {error && (
            <p>
              Something is wrong <b>;(</b>
            </p>
          )}
          <div>{renderBoards(boardsList)}</div>
        </BoardsGrid>
      )}
    </Container>
  )
}

export default PublicTreds
