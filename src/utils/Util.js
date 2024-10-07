
const formatData = (data, divisor) => {
  const parts = data.split(divisor); // Divide a data em partes
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  
  const day = parts[2]; // Dia
  const month = meses[parts[1] - 1]; // Mês (ajustando o index 0)
  const year = parts[0]; // Ano

  return `${day} de ${month} de ${year}`; // Retorna no formato DD de Mês de YYYY
};

export default formatData;