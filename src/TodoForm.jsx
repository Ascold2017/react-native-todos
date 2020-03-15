import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import AppCard from './AppCard'
import AppButton from './AppButton';
export const TodoForm = ({ title, submitTodo, setTitle }) => {


  return (
    <AppCard style={styles.container}>
      <View><Text style={styles.label}>Todo title</Text></View>
      <View style={styles.form}>
        <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
        <AppButton onPress={() => submitTodo()} color="green">
          <FontAwesome5 name="plus" size={20}/>
        </AppButton>
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
    fontFamily: 'Roboto'
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