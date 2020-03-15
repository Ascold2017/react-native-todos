import React, { useReducer, createContext } from 'react'

export const TodoContext = createContext()

export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [{ id: '1', title: 'Выучить React Native' }]
  }

  const handlers = {
    [ADD_TODO]: (state, payload) => ({ ...state, todos: [...state.todos, { id: Date.now().toString(), title: payload.title }] }),
    [EDIT_TODO]: (state, payload) => ({
      ...state, todos: state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo.title = payload.title;
        }
        return todo
      }),
    }),
    [DELETE_TODO]: (state, payload) => ({ ...state, todos: state.todos.filter(todo => todo.id !== payload.id) }),
    DEFAULT: (state) => state
  }

  const todoReducer = (state, action) => {
    return (handlers[action.type] || handlers['DEFAULT'])(state, action)
  }

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = ({ title }) => dispatch({ type: ADD_TODO, title })
  const editTodo = ({ id, title }) => dispatch({ type: EDIT_TODO, id, title })
  const deleteTodo = ({ id }) => dispatch({ type: DELETE_TODO, id })

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        editTodo,
        deleteTodo
      }}
    >
      {children}
    </TodoContext.Provider >
  )
}
