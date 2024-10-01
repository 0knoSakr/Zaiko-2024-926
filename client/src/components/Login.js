import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch;
  };

  return (
    <div>
      <h2>ログイン</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="Password" placeholder="Password" />
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default Login;
