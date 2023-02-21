import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todoReducer'
import themeReducer from './reducers/themeReducer'

export default configureStore({
    reducer: {
        todo: todoReducer,
        theme: themeReducer
    }
});
