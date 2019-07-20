import { gql } from 'apollo-boost';
import React, {useEffect, useState} from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components/native'

import PokemonCard from '../components/PokemonCard';
import Pokemon from '../interfaces/Pokemon';

const GetPokis = gql`
  {
    pokemons(first: 15) {
      id
      name
      image
    }
  }
`

const Container = styled.View`
  align-self: center;
  height: 90%;
  width: 90%;
  overflow: visible;
`

const Heading = styled.Text`
  font-size: 24;
  font-weight: 700;
  margin-left: 15px;
  margin-bottom: 20px;
  color: black;
  width: 100%;
`

const List = styled(ScrollView)`
  background-color: white;
  overflow: visible;
  width: 100%;
`

export default () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://www.pokemon.com/de/api/pokedex/kalos");
      res.json()
        .then(res => {
            return res.filter((pokemon, index) => {

              if( index == 0) return pokemon

              if(res[index - 1].id != res[index].id) return pokemon

            })
        })
        .then(res => setPokemons(res))


    }
    fetchData();
  }, []);

  return (
    <Container>
      <List
        contentContainerStyle={{
          flexGrow:1,
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexDirection: 'row'
        }}
        showsVerticalScrollIndicator={false}
      >
        <Heading>Pokedex</Heading>
        {pokemons.map(({ ...pokemonProps }: Pokemon) => (
          <PokemonCard key={pokemonProps.id.toString()} {...pokemonProps} />
        ))}
      </List>
    </Container>
  );

}