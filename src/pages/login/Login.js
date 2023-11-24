import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../config/providers/UserProvider/UserProvider";
import { PATH_PAGE } from "../../routes/paths";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = () => {
    if (email === "micheal@gmail.com" && +password === 12345678) {
      localStorage.setItem("bigRamy", JSON.stringify({ email: email }));
      setUser({ email: email });
      navigate(PATH_PAGE.books);
    } else {
      alert("enter credential you see on the page");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-header">Login</h2>
        <p>Email: micheal@gmail.com</p>
        <p>Password: 12345678</p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e?.target?.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e?.target?.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="login-button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
