import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faEye, faClock, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const Span = styled.span`
  margin-right: 10px;
  font-family: 'Roboto-Regular';
  color: ${({ theme }) => theme.textColor};
`

export default ({ views, board, date }) => (
  <>
    <Span>
      <Icon icon={faEye}></Icon>
      &nbsp;{views}
    </Span>
    <Span>
      <Icon icon={faNewspaper}></Icon>
      &nbsp;{board}
    </Span>
    <Span>
      <Icon icon={faClock}></Icon>
      &nbsp;{date}
    </Span>
  </>
)
