import styled from 'styled-components'

export const PhotoGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Item = styled.div`
  min-width: 80px;
  min-height: 80px;
  width: 50%;
  max-width: 200px;
  max-height: 200px;
  padding: 5px;
  box-sizing: border-box;
`

export const Image = styled(Item)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 0px;
  object-fit: cover;
  border-radius: 5px;
`

export const FakeImage = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: ${({ theme }) => theme.defColor};
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus,
  &:active {
    box-shadow: ${({ theme }) => theme.linkHoverShadow};
    background: ${({ theme }) => theme.linkHoverBg};
  }
`

export const FakeCount = styled.span`
  font-size: 2rem;
  font-family: 'Roboto-Regular';
  color: white;
`
