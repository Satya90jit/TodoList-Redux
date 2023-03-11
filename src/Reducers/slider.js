import { createSlice } from "@reduxjs/toolkit";
const localFunc = () => {
  // const todoItems = ( localStorage.getItem("todos"));
  const todoItems = JSON.parse( localStorage.getItem("todos"));
  if (todoItems) 
  // return (todoItems)
    return JSON.parse( localStorage.getItem("todos"));
    localStorage.setItem("todos", JSON.stringify([]));
  
};
export const slider = createSlice({
  name: "toDo",
  initialState: {
    todoList: localFunc(),
  },

  reducers: {
    addToDo: (state, action) => {
      const todoUpdate = {
        id: new Date().getTime(),
        content: action.payload.newContent,
      };
      const todoss = state.todoList.push(todoUpdate);
      // console.log(todoss);
      localStorage.setItem("todos", JSON.stringify(state.todoList));
    },
    removeAll: (state, action) => {
      state.todoList = [];
      localStorage.clear();
      localStorage.setItem("todos", JSON.stringify(state.todoList));
    },
    deleteToDo: (state, action) => {
      const { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.todoList));

    },
    editTodo: (state, action) => {
      const { todoList } = state;
      state.todoList = todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});
export const { addToDo, removeAll, deleteToDo, editTodo } = slider.actions;
export default slider.reducer;
