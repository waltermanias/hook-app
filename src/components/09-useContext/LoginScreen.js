import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      name: "Walter",
      email,
    });
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="email"
          value={email}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-primary form-control" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
