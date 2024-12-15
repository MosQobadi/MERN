import TodoContext from "../../context/TodoContext";

import { useContext } from "react";
import Forms from "./Forms";

const TodosList = () => {
  const { todos, removeTodo } = useContext(TodoContext);

  const deleteTodo = (id) => {
    removeTodo(id);
  };

  const editTodo = (id) => {
    // setEditMode(true);
    // setEditingTodo(id);
  };

  return (
    <div>
      <Forms />
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h4>{todo.title}</h4>
            <button onClick={() => deleteTodo(todo._id)}>remove</button>
            <button onClick={() => editTodo(todo)}>edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodosList;
