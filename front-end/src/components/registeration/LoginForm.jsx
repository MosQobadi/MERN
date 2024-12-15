import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

const LoginForm = () => {
  const { users } = useContext(UserContext);

  const [loggedUser, setLoggedUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoggedUser({
      ...loggedUser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredUsers = users.filter((user) => {
      return (
        user.email === loggedUser.email && user.password === loggedUser.password
      );
    });

    if (filteredUsers.password === loggedUser.password) {
      setLoggedUser(filteredUsers);
    }
    localStorage.setItem("loggedUser", filteredUsers[0]._id);
    console.log(filteredUsers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          value={loggedUser.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={loggedUser.password}
          onChange={handleInputChange}
        />
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
