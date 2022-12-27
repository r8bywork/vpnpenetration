import { Menubar } from "primereact/menubar";
import {Button} from "primereact/button"
import {InputText} from "primereact/inputtext"
import { useState } from "react";

const Menubars = () => {
  const [login,setLogin] = useState(true)

  return (
      <Menubar
        start={"CRM"}
        end={<Button label={login ? "Logout" : "Login" }/>}
      />
  );
};

export default Menubars;
