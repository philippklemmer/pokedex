import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';

interface HomeScreenProps {
  navigation: NavigationScreenProp<string, any>
}

export default ({navigation}:HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to my Pokedex app!</Text>
      <Button
        title="Pokedex"
        onPress={() => {
          navigation.navigate('Pokedex');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});