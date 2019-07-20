import React from 'react'
import styled from 'styled-components/native'

const StyledImage = styled.Image`
  position: absolute;
  height: 75%;
  bottom: 2.5%;
  right: 5%;
`

interface Props {
  image: string
  style?: object
}

const CardImage = ({image, style}: Props) => {
  return (
    <StyledImage
      source={{uri: image}}
    />
  )
}

export default CardImage
