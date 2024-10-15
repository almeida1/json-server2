import React from "react";

const ClienteList = ({ clientes }) => {
  if (clientes.length === 0) {
    return <p>Nenhum cliente encontrado.</p>;
  }

  return (
    <ul>
      {clientes.map((cliente) => (
        <li key={cliente.id}>
          <strong>Nome:</strong> {cliente.nome} <br />
          <strong>Endereço:</strong> {cliente.endereco}
        </li>
      ))}
    </ul>
  );
};

export default ClienteList;
