import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "./layouts/Layout";
import "./App.css";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import MainContainer from "./containers/MainContainer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [incorrectLogin, setIncorrectLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    if (userData) {
      setIncorrectLogin(false);
      setCurrentUser(userData);
      history.push("/");
    }
    setIncorrectLogin(true);
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    setIncorrectLogin(false);
    history.push("/");
  };

  return (
    <div className="App">
      <ScrollToTop />
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} incorrectLogin={incorrectLogin} />
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
