import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>React Native Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    height: 60,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    paddingVertical: 5,
    fontWeight: 'bold',
    fontSize: 16
  }
})