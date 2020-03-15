import React, { useState, useContext } from 'react';
import { StyleSheet, View, FlatList, Text, Alert, Keyboard } from 'react-native';
import { Navbar } from './Navbar';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { TodoContext } from './context/todo';

export const Layout = () => {
  const { todos, addTodo, editTodo, deleteTodo } = useContext(TodoContext);
  const [editedItemId, setEditedItemId] = useState(null);
  const [title, setTitle] = useState('');

  const submitTodo = () => {
    saveTodo({ title, id: Date.now() });
    setTitle('');
    Keyboard.dismiss();
  };
  const saveTodo = (todo) => {
    if (!editedItemId) {
      addTodo({ title: todo.title })
    } else {
      editTodo({ id: editedItemId, title: todo.title })
      setEditedItemId(null)
    }
  }
  const chooseTodo = todo => {
    setEditedItemId(todo.id);
    setTitle(todo.title);
  }
  const removeTodo = todo => {
    Alert.alert('Confirm', `Are you sure to remove ${todo.title} from todos?`, [
      {
        text: 'Yes',
        onPress: () => {
          deleteTodo({ id: todo.id })
          setEditedItemId(null);
          setTitle('')
        }
      },
      {
        text: 'Cancel'
      }
    ])

  }

  return (
    <View style={styles.container}>
      <Navbar />
      <TodoForm title={title} setTitle={setTitle} submitTodo={submitTodo} />
      {todos.length === 0 && <Text style={styles.emptyText}>Todos is empty.</Text>}
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({ item }) => (<TodoItem todo={item} chooseTodo={chooseTodo} removeTodo={removeTodo} />)}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  list: {
    flex: 1,
    paddingHorizontal: 20
  },
  emptyText: {
    textAlign: 'center'
  }
});