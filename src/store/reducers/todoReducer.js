import { createSlice } from '@reduxjs/toolkit'

export const todoReducer = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.splice(0, 0, action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id != action.payload)
    },
    updateTodo: (state, action) => {
      return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, updateTodo } = todoReducer.actions

export default todoReducer.reducer