import "./App.css";
import Empleados from "./views/empleados";
import { Toaster } from "react-hot-toast";
import Crear from "./views/crear";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={true} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Empleados />} />
        <Route path="/crear" element={<Crear />} />
      </Routes>
    </Router>
  );
}

export default App;
