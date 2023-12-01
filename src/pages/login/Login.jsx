

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null); // Clear the error when the user interacts with the form
  };

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data); // Set the error message
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
        <h1>The Social Edge</h1>
          <p>
          Vibe Higher, Connect Deeper: 
          TheSocial Edge - Gen Z's Ultimate Hub for Authentic Vibes and Limitless Connections!
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={handleChange}
            />
            {error && <div className="error">{error}</div>}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

