import React, { useEffect, useState } from "react";
import "./ClienteConsulta.css"; // Importa o arquivo de estilos CSS

const ClienteConsulta = () => {
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch("http://localhost:3000/v2clientes");
        if (!response.ok) {
          throw new Error("Erro ao consultar clientes");
        }
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchClientes();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Clientes</h1>
      {clientes.length > 0 ? (
        <table className="cliente-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.endereço}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum cliente encontrado.</p>
      )}
    </div>
  );
};

export default ClienteConsulta;
