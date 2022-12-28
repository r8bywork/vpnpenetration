import { Menubar } from "primereact/menubar";
import {Button} from "primereact/button"
import {InputText} from "primereact/inputtext"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const Menubars = () => {
  const [login,setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLogin(localStorage.getItem("token"));
  }, [])
  const jopaVlada = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
      <Menubar
        start={"CRM"}
        end={<Button onClick={jopaVlada} label={login ? "Logout" : "Login" }/>}
      />
  );
};

export default Menubars;
