import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { users, addUser } = useContext(UserContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkUniqueUser = users.filter((user) => {
      return user.email === newUser.email;
    });

    if (
      newUser.firstName !== "" &&
      newUser.lastName !== "" &&
      newUser.email !== "" &&
      newUser.password !== ""
    ) {
      if (checkUniqueUser.length < 1) {
        addUser(newUser);
        navigate("/profile");
      } else {
        alert("You have registerd with this email before");
      }

      console.log(users);
    } else {
      alert("Please Fill the Form");
    }

    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={newUser.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={newUser.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={newUser.password}
          onChange={handleInputChange}
        />
      </div>
      <button>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
