import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './app/views/HomeScreen';
import PokedexScreen from './app/views/PokedexScreen';

// In App.js in a new project
const AppNavigator = createStackNavigator({
  Home: {
    screen: PokedexScreen
  },
  Pokedex: {
    screen: PokedexScreen
  }
});

export default createAppContainer(AppNavigator);
