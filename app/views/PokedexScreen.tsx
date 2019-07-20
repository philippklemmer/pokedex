import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import PokemonList from '../components/PokemonList';

const Container = styled(SafeAreaView)`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`

export default () => {

  return (
    <Container>
      <PokemonList />
    </Container>
  );
}