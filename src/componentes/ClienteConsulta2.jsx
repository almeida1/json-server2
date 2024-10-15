import React, { useState, useEffect } from "react";

// Hook customizado para consultar os clientes
const useFetchClientes = (url) => {
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);

  return { clientes, error };
};

// Componente para exibir a lista de clientes
const ClienteConsulta2 = () => {
  const { clientes, error } = useFetchClientes(
    "http://localhost:3000/v1clientes"
  ); // Injeção de dependência

  if (error) {
    return <p>Erro: {error}</p>;
  }

  if (clientes.length === 0) {
    return <p>Carregando clientes...</p>;
  }

  return (
    <table>
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
  );
};

export default ClienteConsulta2;
