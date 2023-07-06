import { useState, useEffect, useMemo } from "react";

import ModeloTabla from "../components/createTable/modeloTabla";
import { obtenerEmpleado, eliminarEmpleado } from "../services/empleados";
// import { data } from "../data/data";

function Empleados() {
  const [empleados, setEmpleados] = useState([1, 2, 2]);
  useEffect(() => {
    getEmpleados();
  }, []);

  const getEmpleados = async () => {
    const query = await obtenerEmpleado();
    setEmpleados(query);
    // console.log(query);
  };

  const handleDelete = async (id) => {
    const query = await eliminarEmpleado(id);
    getEmpleados();
    console.log(query);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Empleados",
        columns: [
          {
            Header: "Id",
            accessor: "id",
          },
          {
            Header: "Nombre",
            accessor: "nombre",
          },
          {
            Header: "Apellido",
            accessor: "apellido",
          },
          {
            Header: "Salario Base",
            accessor: "salario_base",
          },
          {
            Header: "Horas Trabajadas",
            accessor: "horas_trabajadas",
          },
          {
            Header: "DPI",
            accessor: "dpi",
          },
          {
            Header: "Genero",
            accessor: "genero",
          },
          {
            Header: "Funciones",
            accessor: (del) => {
              return (
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(del.id)}
                >
                  delete
                </button>
              );
            },
          },
        ],
      },
    ],
    []
  );

  return (
    <div>
      <ModeloTabla columns={columns} data={empleados || []} />
    </div>
  );
}

export default Empleados;
