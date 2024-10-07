import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './Form.css'
import Alert from '../Alert/Alert'; 

const Form = ({ onSubmit }) => {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [preco, setPreco] = useState('');
  const [poltrona, setPoltrona] = useState('');
  const [data, setData] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação dos campos
    if (!origem || !destino || !preco || !data) {
      setErrorMessage('Preencha todos os campos.'); 
      return;
    }

    const novaPassagem = { origem, destino, preco: Number(preco).toFixed(2), poltrona, data }; // Formata o perco com 2 casas decimais
    onSubmit(novaPassagem); //Insere uma nova passagem atraves da funcao passada na prop onSubmit
    
    // Limpa os campos e a mensagem de erro
    setOrigem('');
    setDestino('');
    setPreco('');
    setPoltrona('');
    setData('');
    setErrorMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <Alert message={errorMessage} />}
      <FormInput label="Origem" value={origem} onChange={e => setOrigem(e.target.value)} />
      <FormInput label="Destino" value={destino} onChange={e => setDestino(e.target.value)} />
      <FormInput label="Preço" type="number" value={preco} onChange={e => setPreco(e.target.value)} />
      <FormInput label="Poltrona" type="number" min="1" step="1" value={poltrona} onChange={e => setPoltrona(e.target.value)} />
      <FormInput label="Data" type="date" value={data} onChange={e => setData(e.target.value)} />
      <Button type="submit">Cadastrar Passagem</Button>
    </form>
  );
};

export default Form;