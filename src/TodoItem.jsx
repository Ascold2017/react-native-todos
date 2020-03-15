import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import AppCard from './AppCard';
import AppButton from './AppButton';
import { TodoContext } from './context/todo';

export const TodoItem = ({ todo }) => {
  const { deleteTodo, setCurrentTodo } = useContext(TodoContext);
  const chooseTodo = () => {
    setCurrentTodo(todo.id)
  }
  const removeTodo = () => {
    Alert.alert('Confirm', `Are you sure to remove ${todo.title} from todos?`, [
      {
        text: 'Yes',
        onPress: () => deleteTodo(todo.id)
      },
      {
        text: 'Cancel'
      }
    ])

  }
  return (
    <TouchableOpacity>
      <AppCard style={styles.todo}>
        <Text style={styles.todoTitle}>{todo.title}</Text>
        <AppButton color="green" onPress={chooseTodo} style={{ marginRight: 5 }}><FontAwesome name="edit" size={20} /></AppButton>
        <AppButton color="red" onPress={removeTodo}><FontAwesome name="remove" size={20} /></AppButton>
      </AppCard>
    </TouchableOpacity>
  )
}
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