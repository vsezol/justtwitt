import React from 'react'
import LinkBtn from '../../../UI/LinkBtn/LinkBtn'
import Stats from '../../../UI/Stats/Stats'
import TredContainer from '../../../UI/TredContainer/TredContainer'
import {
  Title,
  Preview,
  InfoPanel,
  StatsContainer
} from '../styledComponents'

const MicroTred = props => {
  const limitText = text =>
    text.slice(0, 200).split(' ').slice(0, -1).join(' ') + '...'
  return (
    <TredContainer>
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
    </TredContainer>
  )
}

export default MicroTred
