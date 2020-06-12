import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getTredsBB } from '../../../store/actions/tredsByBoard'

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import Container from '../../../hoc/Container/Container'
import PageTitle from '../../UI/PageTitle/PageTitle'
import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage'

import renderMicroTreds from '../../../modules/renderMicroTreds/renderMicroTreds'

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

      {loading ? (
        <LoaderContainer />
      ) : error ? (
        <ErrorMessage>
          Здесь нет ни одного треда <b>;(</b>
        </ErrorMessage>
      ) : (
        renderMicroTreds(treds)
      )}
    </Container>
  )
}

export default Board
