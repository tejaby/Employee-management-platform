import { useState } from "react";
import { crearEmpleado } from "../../services/empleados";
import "./form.css";
import toast from "react-hot-toast";

function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState("");
  const [hour, setHour] = useState("");
  const [dpi, setDpi] = useState("");
  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "nombre") {
      setName(value);
    } else if (name === "apellido") {
      setLastName(value);
    } else if (name === "salario") {
      setSalary(value);
    } else if (name === "hora") {
      setHour(value);
    } else if (name === "dpi") {
      setDpi(value);
    } else if (name === "genero") {
      setGender(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      nombre: name,
      apellido: lastName,
      salario_base: salary,
      horas_trabajadas: hour,
      dpi: dpi,
      genero: gender,
    };

    onSubmit(newEmployee);
  };

  const onSubmit = async (data) => {
    const res = await crearEmpleado(data);
    toast.success("Creado!");
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="nombre"
        placeholder="Yostin..."
        value={name}
        className="input"
        onChange={handleChange}
      />
      <input
        type="text"
        name="apellido"
        placeholder="Tejaxun..."
        value={lastName}
        className="input"
        onChange={handleChange}
      />
      <input
        type="number"
        name="salario"
        placeholder="Q.1000"
        value={salary}
        className="input"
        onChange={handleChange}
      />
      <input
        type="number"
        name="hora"
        placeholder="8hr"
        value={hour}
        className="input"
        onChange={handleChange}
      />
      <input
        type="number"
        name="dpi"
        placeholder="2657876987987"
        value={dpi}
        className="input"
        onChange={handleChange}
      />
      <select name="genero" value={gender} onChange={handleChange}>
        <option value="" disabled>
          Seleccionar
        </option>
        <option value="1">Masculino</option>
        <option value="2">Femenino</option>
        <option value="3">raritos</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default Form;
