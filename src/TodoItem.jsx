import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import AppCard from './AppCard';

export const TodoItem = ({ chooseTodo, todo, removeTodo }) => (
  <TouchableOpacity>
    <AppCard style={styles.todo}>
      <Text style={styles.todoTitle}>{todo.title}</Text>
      <Button title="Edit" color="green" onPress={() => chooseTodo(todo)} />
      <Button title="Delete" color="red" onPress={() => removeTodo(todo)} />
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