import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginFunc = () => toast("Successfully logged in ", username);
  const fakePaswFunc = () => toast("Check your password or login");
  const errorFunc = () => toast("Error");


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://45.8.146.72:24678/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then(async (response) => {
        if (response.ok) {
          loginFunc();
          const json = await response.json();
          localStorage.setItem("token", json.accessToken);
          navigate("/table");
        } else {
          fakePaswFunc();
        }
      })
      .catch((error) => {
        errorFunc();
      });
  };

  return (
    <form onSubmit={handleSubmit} className="popa">
      <label htmlFor="username">Username:</label>
      <InputText
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <Password
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" label="Login" />
    </form>
  );
};

export default Login;
