import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const Navbar = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-512/react-native-1-555609.png' }} resizeMode='contain' />
      <Text style={styles.title}>React Native Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  title: {
    color: 'white',
    paddingVertical: 5,
    fontWeight: 'bold',
    fontSize: 16
  }
})