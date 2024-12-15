import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import AddTodoForm from "./todo/AddTodoForm";
import UpdateTofoForm from "./todo/UpdateTodoForm";

const Forms = () => {
  const { editMode } = useContext(TodoContext);

  if (editMode === true) {
    return (
      <div>
        <UpdateTofoForm />
      </div>
    );
  } else {
    return (
      <div>
        <AddTodoForm />
      </div>
    );
  }
};

export default Forms;
