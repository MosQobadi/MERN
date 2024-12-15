import React, { useContext } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import UserContext from "../../context/UserContext";

const Register = () => {
  const { users, removeUser } = useContext(UserContext);

  const deleteUser = (id) => {
    users.filter((user) => {
      return user._id !== id;
    });

    removeUser(id);
  };

  return (
    <div>
      <SignUpForm />
      <LoginForm />
      {users.map((user) => {
        return (
          <div key={user.email}>
            <h4>{user.firstName}</h4>
            <button onClick={() => deleteUser(user._id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Register;
