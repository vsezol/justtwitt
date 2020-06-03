import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { getBoardsList } from '../../../store/actions/publicTredsActionCreators'

import styled from 'styled-components'
import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import Container from '../../../hoc/Container/Container'
import LinkBtn from '../../UI/LinkBtn/LinkBtn'
import PageTitle from '../../UI/PageTitle/PageTitle'
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage'

const BoardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
`

const Board = styled.div`
  width: 100%;
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
      <Board key={index}>
        <LinkBtn to={boards[name]} width='100%'>
          {name}
        </LinkBtn>
      </Board>
    ))

  return (
    <Container>
      <PageTitle>Публичные треды</PageTitle>
      {loading ? (
        <LoaderContainer />
      ) : (
        <BoardsGrid>
          {error ? (
            <ErrorMessage>
              Something is wrong <b>;(</b>
            </ErrorMessage>
          ) : (
            renderBoards(boardsList)
          )}
        </BoardsGrid>
      )}
    </Container>
  )
}

export default PublicTreds
