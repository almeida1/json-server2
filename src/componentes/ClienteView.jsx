import React, { useEffect, useState } from "react";
import ClienteList from "./ClienteList"; // Componente responsável pela exibição
import fetchClientes from "./ClienteService"; // Serviço que lida com a consulta ao endpoint

const ClienteView = () => {
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClientes()
      .then((data) => {
        setClientes(data);
        setError(null); // Limpa o erro se a consulta for bem-sucedida
      })
      .catch((err) => {
        setError("Falha ao carregar os dados dos clientes");
      })
      .finally(() => {
        setLoading(false); // Define o estado de carregamento como falso após a consulta
      });
  }, []);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <ClienteList clientes={clientes} />}
    </div>
  );
};

export default ClienteView;
