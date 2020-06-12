import React, { useEffect } from 'react'
import PageTitle from '../../UI/PageTitle/PageTitle'
import Container from '../../../hoc/Container/Container'

import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage'

import { getTredsBB } from '../../../store/actions/tredsByBoard'

const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  font-size: 1.3rem;
`

const Board = props => {
  const boardName = props.match.params.board

  const { loading, treds, error } = useSelector(state => state.board)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTredsBB(boardName))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <PageTitle>
        <Icon icon={faNewspaper}></Icon>
        {boardName}
      </PageTitle>
      {loading ? <LoaderContainer /> : null}
      {error ? (
        <ErrorMessage>
          Здесь нет ни одного треда <b>;(</b>
        </ErrorMessage>
      ) : null}
    </Container>
  )
}

export default Board
