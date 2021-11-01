import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { setUser, user } = useContext(UserContext);

  return (
    <div>
      <h1>About</h1>
      <hr />

			<pre>{JSON.stringify(user)}</pre>

      <button onClick={() => setUser({})} className="btn btn-warning">
        Logout
      </button>
    </div>
  );
};
