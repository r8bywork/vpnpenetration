import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { useState } from "react";
import './Login.css'
const Login = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login)
    console.log(password)
    // Perform login action using the provided username and password
  };
  return (
    <form onSubmit={handleSubmit} className="popa">
      <label htmlFor="username">Username:</label>
      <InputText
        name="username"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
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
