import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Alert } from 'react-native';
import { Navbar } from './src/Navbar';
import { TodoForm } from './src/TodoForm';
import { TodoItem } from './src/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editedItemId, setEditedItemId] = useState(null);

  const [title, setTitle] = useState('');
  const submitTodo = () => {
    saveTodo({ title, id: Date.now() });
    setTitle('');
  };
  const saveTodo = (todo) => {
    if (!editedItemId) {
      setTodos(todos => [
        todo,
        ...todos
      ]);
    } else {
      setTodos(todos => todos.map(todoItem => todoItem.id === editedItemId ? { id: todoItem.id, title: todo.title } : todoItem));
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
          setTodos(todos => todos.filter(todoItem => todoItem.id !== todo.id));
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
      <TodoForm title={title} setTitle={setTitle} submitTodo={submitTodo}/>
      { todos.length === 0 && <Text style={styles.emptyText}>Todos is empty.</Text> }
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({ item }) => (<TodoItem todo={item} chooseTodo={chooseTodo} removeTodo={removeTodo}/>)}
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
