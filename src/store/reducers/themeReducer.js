import { createSlice } from '@reduxjs/toolkit'

export const themeReducer = createSlice({
  name: 'theme',
  initialState: false,
  reducers: {
    toggleTheme: state => {
      return !state;
    },
  }
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeReducer.actions

export default themeReducer.reducer