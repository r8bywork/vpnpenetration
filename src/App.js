import Login from "./components/login";
import Table from "./components/table";
import { ToastContainer, toast } from "react-toastify";
import { Route, Router, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/table" element={<Table />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
