import React, { useState, useContext } from 'react';
import { StyleSheet, View, FlatList, Text, Alert, Keyboard } from 'react-native';
import { Navbar } from './Navbar';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { TodoContext } from './context/todo';

export const Layout = () => {
  const { todos } = useContext(TodoContext);

  return (
    <View style={styles.container}>
      <Navbar />
      <TodoForm />
      {todos.length === 0 && <Text style={styles.emptyText}>Todos is empty.</Text>}
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({ item }) => (<TodoItem todo={item} />)}
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