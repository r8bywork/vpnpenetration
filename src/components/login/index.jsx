import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { useState } from "react";
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username)
    console.log(password)
    fetch('http://45.8.146.72:24678/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          // username was successful, redirect to the dashboard or show a success message
          console.log("good")
        } else {
          // username was unsuccessful, show an error message
          console.log("idi naxui")
        }
      })
      .catch((error) => {
        console.log(error)
        // There was an error connecting to the backend, show an error message
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
