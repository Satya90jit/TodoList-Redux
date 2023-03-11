import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../Reducers/slider";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    content: "",
  });

  const handleOnchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };

  const addTodo = (e) => {
    e.preventDefault();
    console.log(content);
    if (!content || content.trim().length === 0) {
      alert("add something");
      setState(...state)
      return;
      
    }

    dispatch(addToDo({ newContent: content.trim()}));
    setState({ ...state, content: "" });
  };
  const { content } = state;
  return (
    <>
      <div className="h-100 w-100 d-flex align-items-center justify-content-center">
        <div className="  h-100 w-75 d-flex align-items-center justify-content-center">
          <form className="  h-50 w-75">
            <div className="container rounded shadow mt-5 mb-5 p-5 bg-danger">
              <h1 className="text-center text-white m-3 mb-5">
                Redux Todo List{" "}
              </h1>
              <div className="mb-3 d-flex">
                <input
                  type="text"
                  placeholder="Add todo here...."
                  value={content}
                  name="content"
                  className="form-control"
                  onChange={handleOnchange}
                ></input>
                <button
                  type="submit"
                  className="btn btn-warning ms-3"
                  onClick={addTodo}
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Todo;
