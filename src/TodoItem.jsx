import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import AppCard from './AppCard';
import AppButton from './AppButton';

export const TodoItem = ({ chooseTodo, todo, removeTodo }) => (
  <TouchableOpacity>
    <AppCard style={styles.todo}>
      <Text style={styles.todoTitle}>{todo.title}</Text>
      <AppButton color="green" onPress={() => chooseTodo(todo)} style={{ marginRight: 5 }}><FontAwesome name="edit" size={20} /></AppButton>
      <AppButton color="red" onPress={() => removeTodo(todo)}><FontAwesome name="remove" size={20} /></AppButton>
    </AppCard>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5
  },
  todoTitle: {
    color: 'black',
    flex: 1
  }
})