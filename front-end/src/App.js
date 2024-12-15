import { Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import { UserProvider } from "./context/UserContext";
import TodosList from "./components/todo/TodosList";
import SlideMenu from "./components/SlideMenu";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import SignUpForm from "./components/registeration/SignUpForm";
import LoginForm from "./components/registeration/LoginForm";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <UserProvider>
          <SlideMenu />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/todos-list" element={<TodosList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </UserProvider>
      </TodoProvider>
    </div>
  );
}

export default App;
