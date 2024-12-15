import TodoContext from "../../context/TodoContext";
import { useContext, useState } from "react";

const AddTodoForm = () => {
  const { addTodo } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    const newTodo = {
      title,
      body,
    };

    addTodo(newTodo);

    setTitle("");
    setBody("");
    e.preventDefault();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div>
      <h3>Add Todo</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">title</label>
          <input
            onChange={handleTitleChange}
            type="text"
            name="title"
            value={title}
          />
        </div>
        <div>
          <label htmlFor="body">body</label>
          <input
            onChange={handleBodyChange}
            type="text"
            name="body"
            value={body}
          />
        </div>
        <button onClick={handleSubmit}>add todo</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
