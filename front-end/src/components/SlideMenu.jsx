import { Link } from "react-router-dom";

const SlideMenu = () => {
  return (
    <nav id="slide-menu">
      <ul>
        <li>
          <Link to="/">Dashbord</Link>
        </li>
        <li>
          <Link to="/todos-list">Todo List</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <button>
        <Link to="sign-up">Sign Up</Link>
      </button>
      <button>
        <Link to="login">Login</Link>
      </button>
    </nav>
  );
};

export default SlideMenu;
