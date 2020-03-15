import React, { useContext } from 'react';
import { TodoContext } from './context/todo'
import { View, Text, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import AppCard from './AppCard'
import AppButton from './AppButton';
export const TodoForm = () => {
  const { title, setTitle, currentTodoId, addTodo, editTodo } = useContext(TodoContext)
  const submitTodo = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Title must not be empty!')
    } else {
      currentTodoId ? editTodo() : addTodo();
      Keyboard.dismiss();
    }
  }
  return (
    <AppCard style={styles.container}>
      <View><Text style={styles.label}>Todo title</Text></View>
      <View style={styles.form}>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />
        <AppButton onPress={submitTodo} color="green">
          <FontAwesome5 name="plus" size={20} />
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