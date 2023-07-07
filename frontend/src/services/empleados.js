import axios from "axios";

export const crearEmpleado = async (data) => {
  try {
    const res = await axios.post("http://localhost:8000/api/empleados/", data);
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const obtenerEmpleado = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/empleados/");
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const eliminarEmpleado = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:8000/api/empleados/${id}`);
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
