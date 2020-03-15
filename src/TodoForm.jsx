import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import AppCard from './AppCard'
export const TodoForm = ({ title, submitTodo, setTitle }) => {


  return (
    <AppCard style={styles.container}>
      <View><Text style={styles.label}>Todo title</Text></View>
      <View style={styles.form}>
        <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
        <Button title="Add" onPress={() => submitTodo()}/>
      </View>
    </AppCard>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    marginHorizontal: 0,
    
  },
  label: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: '500'
  },
  input: {
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderWidth: 1,
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: '#ccc',
    flex: 1,
    marginRight: 5
  },
  form: {
    flexDirection: 'row',
    width: '100%',
  }
})