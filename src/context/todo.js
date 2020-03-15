import React, { useReducer, createContext } from 'react'

export const TodoContext = createContext()

export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const SET_CURRENT_TODO_ID = 'SET_CURRENT_TODO_ID'
export const SET_TODO_TITLE = 'SET_TODO_TITLE'

export const TodoState = ({ children }) => {
  const initialState = {
    currentTodoId: null,
    todoTitle: '',
    todos: [{ id: '1', title: 'Выучить React Native' }]
  }

  const handlers = {
    [ADD_TODO]: (state, payload) => ({ ...state, todos: [...state.todos, payload.todo] }),
    [EDIT_TODO]: (state, payload) => ({
      ...state, todos: state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo.title = payload.title;
        }
        return todo
      }),
    }),
    [DELETE_TODO]: (state, payload) => ({ ...state, todos: state.todos.filter(todo => todo.id !== payload.id) }),
    [SET_CURRENT_TODO_ID]: (state, payload) => ({ ...state, currentTodoId: payload.id }),
    [SET_TODO_TITLE]: (state, payload) => ({ ...state, todoTitle: payload.title }),
    DEFAULT: (state) => state
  }

  const todoReducer = (state, action) => {
    return (handlers[action.type] || handlers['DEFAULT'])(state, action)
  }

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = () => {
    dispatch({ type: ADD_TODO, todo: { id: Date.now().toString(), title: state.todoTitle } })
    dispatch({ type: SET_CURRENT_TODO_ID, id: null })
    dispatch({ type: SET_TODO_TITLE, title: '' })
  }
  const editTodo = () => {
    dispatch({ type: EDIT_TODO, id: state.currentTodoId, title: state.todoTitle })
    dispatch({ type: SET_CURRENT_TODO_ID, id: null })
    dispatch({ type: SET_TODO_TITLE, title: '' })
  }
  const deleteTodo = id => {
    dispatch({ type: DELETE_TODO, id })
    dispatch({ type: SET_CURRENT_TODO_ID, id: null })
    dispatch({ type: SET_TODO_TITLE, title: '' })
  }
  const setCurrentTodo = id => {
    const todo = state.todos.find(todo => todo.id === id)
    dispatch({ type: SET_CURRENT_TODO_ID, id })
    dispatch({ type: SET_TODO_TITLE, title: todo.title })
  }
  const setToZeroCurrentTodo = () => {
    dispatch({ type: SET_CURRENT_TODO_ID, id: null })
    dispatch({ type: SET_TODO_TITLE, title: '' })
  }
  const setTitle = value => dispatch({ type: SET_TODO_TITLE, title: value })

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        currentTodoId: state.currentTodoId,
        title: state.todoTitle,
        addTodo,
        editTodo,
        deleteTodo,
        setToZeroCurrentTodo,
        setCurrentTodo,
        setTitle
      }}
    >
      {children}
    </TodoContext.Provider >
  )
}
