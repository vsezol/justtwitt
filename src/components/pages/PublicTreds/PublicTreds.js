import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import {
  getBoardsList,
  startGetBoardsList
} from '../../../store/actions/publicTredsActionCreators'

import styled from 'styled-components'
import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import Container from '../../../hoc/Container/Container'
import LinkBtn from '../../UI/LinkBtn/LinkBtn'
import PageTitle from '../../UI/PageTitle/PageTitle'
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage'

const BoardsGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 10px;
`

const PublicTreds = () => {
  const { loading, boardsList, error } = useSelector(
    state => state.publicTreds,
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBoardsList())
    return () => dispatch(startGetBoardsList())
  }, [dispatch])

  const renderBoards = boards =>
    Object.keys(boards).map((name, index) => (
      <div key={index} style={{ width: '100%' }}>
        <LinkBtn to={boards[name]} width='100%'>
          {name}
        </LinkBtn>
      </div>
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
              Что-то пошло не так <b>;(</b>
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
