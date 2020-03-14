import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const TodoItem = ({ chooseTodo, todo, removeTodo }) => (
  <TouchableOpacity onPress={() => chooseTodo(todo)} onLongPress={() => removeTodo(todo)}>
    <Text style={styles.todo}>{todo.title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  todo: {
    color: 'black',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5
  }
})