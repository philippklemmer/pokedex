import React from 'react'
import { View, Text } from 'react-native';
import styled from 'styled-components/native'
import CardImage from './CardImage';
import Pokemon from '../../interfaces/Pokemon';

const Card = styled.View`
  background-color: green;
  border-radius: 10;
  margin-bottom: 15;
  height: 115px;
  width: 47,5%;
  box-shadow: 0 1px 4px rgba(0,0,0,.2);
`

const Heading = styled.Text`
  font-weight: 500;
  font-size: 16;
  margin-left: 7.5px;
  margin-bottom: 15px;
  margin-top: 10px;
  color: black;
`

const PokemonCard = ({id, name, ThumbnailImage}: Pokemon) => {
  return (
    <Card>
      <Heading>{name}</Heading>
      <CardImage image={ThumbnailImage || ''}/>
    </Card>
  )
}

export default PokemonCard;