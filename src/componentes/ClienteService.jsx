const fetchClientes = async () => {
  const response = await fetch("http://localhost:3000/v1clientes");

  if (!response.ok) {
    throw new Error("Erro ao consultar o endpoint");
  }

  const data = await response.json();
  return data;
};

export default fetchClientes;
