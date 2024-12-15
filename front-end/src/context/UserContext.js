import { createContext, useEffect, useState } from "react";
import axios from "axios";
// import uuid from "react-uuid";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");

    setUsers(res.data.users);
  };

  const postUser = async (newUser) => {
    await axios.post("http://localhost:3000/users", newUser);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
  };

  // const putTodo = async (id, item) => {
  //   await axios.put(`http://localhost:3000/todo/${id}`, item);
  // };

  const addUser = async (newUser) => {
    setUsers([...users, newUser]);

    postUser(newUser);
  };

  const removeUser = (id) => {
    setUsers(
      users.filter((user) => {
        return user._id !== id;
      })
    );

    deleteUser(id);

    console.log(id);
  };

  const setLoggedInUser = () => {};

  const getLoggedInUser = () => {
    const loggedId = localStorage.getItem("LoggedUser");

    users.filter((user) => {
      return user._id === loggedId;
    });
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        removeUser,
        getLoggedInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
