import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { removeAll } from "../Reducers/slider";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, deleteToDo } from "../Reducers/slider";
const TodoList = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.toDo);
  const [editing, setEditing] = useState(false);
  const [state, setState] = useState({
    id: "",
    content: "",
  });
  const onEditToggle = (id, content) => {
    setEditing(true);
    setState({ ...state, id, content });
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };
  const { content, id } = state;
  const edit = () => {
    if (!content || content.trim().length === 0) {
      alert("can't be blank");
      setState({ ...state });
      return;
    }
    dispatch(editTodo({ content: content.trim(), id }));
    setEditing(false);
    localStorage.setItem("todos", JSON.stringify(state.todoList));
  };
  return (
    <>
      <div>
        {editing ? (
          <div className="  h-75 w-100 d-flex align-items-center justify-content-center">
            <div className="rounded bg-success mt-3 h-25 p-3 w-75 d-flex align-items-center justify-content-between ">
              <input
                type="text"
                className="form-control text-white bg-transparent border-0 shadow-none rounded"
                value={content}
                name="content"
                onChange={handleChange}
              ></input>
              <button
                type="button"
                className="btn btn-sm btn-warning ms-3"
                onClick={edit}
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="todos">
            {todoList.map(({ id, content }) => {
              return (
                <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                  <div
                    className="rounded bg-warning mt-3 h-25 p-3 w-75 d-flex align-items-center justify-content-between "
                    key={id}
                  >
                    <div className="content">{content}</div>
                    <div className="todo-action">
                      <button
                        className="btn btn-sm btn-danger ms-3"
                        onClick={() => dispatch(deleteToDo({ id }))}
                      >
                        Delete
                      </button>

                      <button
                        className="btn btn-sm btn-primary ms-3"
                        onClick={() => onEditToggle(id, content)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div>
        {todoList.length === 0 ? (
          <h3 className="text-danger ms-5 text-center mt-5">No todo added</h3>
        ) : (
          <button
            className="btn btn-danger ms-3 position-absolute bottom-0 mb-3 start-50"
            onClick={() => dispatch(removeAll())}
          >
            Remove All
          </button>
        )}
      </div>
    </>
  );
};
export default TodoList;
