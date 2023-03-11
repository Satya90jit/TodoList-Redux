import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from '../Reducers/slider';
// import toDoReducer from "/";
export default configureStore({
  reducer: { toDo: toDoReducer}
})