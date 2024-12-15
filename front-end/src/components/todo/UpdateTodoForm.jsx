import { useState, useContext } from "react";
import TodoContext from "../../context/TodoContext";

const UpdateTofoForm = () => {
  const { updateTodo } = useContext(TodoContext);
  const [updateForm, setUpdateForm] = useState({
    _id: null, // Include _id to identify the todo to update
    title: "",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { _id, title, body } = updateForm;
    updateTodo(_id, { title, body });
  };

  return (
    <div>
      <h3>Edit Form</h3>
      <form onSubmit={() => handleSubmit}>
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label htmlFor="body">body</label>
          <input type="text" name="body" />
        </div>
        <button>Edit todo</button>
      </form>
    </div>
  );
};

export default UpdateTofoForm;
