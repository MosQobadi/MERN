import { createContext, useEffect, useState } from "react";
import axios from "axios";
// import uuid from "react-uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const res = await axios.get("http://localhost:3000/todos");

    setTodos(res.data.todos);
  };

  const postTodo = async (newItem) => {
    await axios.post("http://localhost:3000/todos", newItem);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3000/todos/${id}`);
  };

  // const putTodo = async (id, item) => {
  //   await axios.put(`http://localhost:3000/todo/${id}`, item);
  // };

  const addTodo = async (newTodo) => {
    setTodos([...todos, newTodo]);

    postTodo(newTodo);
  };

  const removeTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo._id !== id;
      })
    );

    deleteTodo(id);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
