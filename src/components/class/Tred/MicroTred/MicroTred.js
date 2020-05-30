import React from 'react'
import LinkBtn from '../../../UI/LinkBtn/LinkBtn'
import Stats from '../../../UI/Stats/Stats'
import styled from 'styled-components'
import { minSm, minMd, minLg, minXl } from '../../../../styled/grid'

const Tred = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.tredBg};
  border-radius: 5px;
`

const Title = styled.h2`
  margin: 0px;
  padding: 0px;
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-family: 'Roboto-Regular';
  color: ${({ theme }) => theme.textColor};
`

const Preview = styled.div`
  font-size: 1.1rem;
  margin-bottom: 10px;
  font-family: 'Roboto-Regular';
  color: ${({ theme }) => theme.textColor};
`

const InfoPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  flex-direction: row;

  @media screen and (min-width: ${minMd}px) {
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`

const StatsContainer = styled.div`
  display: block;
  margin: 5px;
`

const MicroTred = props => {
  const limitText = text =>
    text.slice(0, 200).split(' ').slice(0, -1).join(' ') + '...'
  return (
    <Tred>
      <Title>{props.tred.title}</Title>
      <Preview>{limitText(props.tred.text)}</Preview>
      <InfoPanel>
        <StatsContainer>
          <Stats
            views={props.tred.views}
            board={props.tred.board}
            date={props.tred.date}
          />
        </StatsContainer>
        <LinkBtn to={`/public/${props.tred.board}/${props.tred.id}/`}>
          Read more
        </LinkBtn>
      </InfoPanel>
    </Tred>
  )
}

export default MicroTred
