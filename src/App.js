import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Alert from "./components/Alert/Alert";
import TicketList from "./components/TicketList/TicketList";
import Form from "./components/Form/Form";
import "./App.css";

const App = () => {
  const [passagens, setPassagens] = useState([]);  //Estado das passagens disponiveis no sistema
  const [compradas, setCompradas] = useState([]); //Estado das passagens compradas
  const [message, setMessage] = useState(""); // Estado do alert

  useEffect(() => {
    updatePassagens();
  }, []);

  //Realiza uma requisicao GET para a API mockada e atualiza a lista de passagens disponíveis
  const updatePassagens = () => {
    fetch("http://localhost:3001/passagens")
      .then((response) => response.json())
      .then((data) => setPassagens(data));
  };

  const handleCompra = (id) => {
    const passagemComprada = passagens.find((p) => p.id === id);
    if (passagemComprada) {
      setCompradas([...compradas, passagemComprada]);
      setMessage("Passagem comprada com sucesso!");
      handleDeletar(id);
    }
  };

  // Realiza uma requisicao DELETE para a API após uma passagem ser comprada pelo cliente e atualiza a lista
  const handleDeletar = async (id) => {
    await fetch(`http://localhost:3001/passagens/${id}`, {
      method: "DELETE",
    });
    updatePassagens();
  };

  // Realiza uma requisicao POST para cadastrar uma nova passagem 
  const handleCadastrar = (novaPassagem) => {
    fetch("http://localhost:3001/passagens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novaPassagem),
    })
      .then((response) => response.json())
      .then((data) => {
        setPassagens([...passagens, data]);
        setMessage("Passagem cadastrada com sucesso!");
      });
  };

  return (
    <>
      <Header>Encontre e compre passagens de forma simples e rápida!</Header>
      <div className="container">
        <Form onSubmit={handleCadastrar} />
        {message && <Alert message={message} />}

        <h2 id="disponiveis">Passagens Disponíveis</h2>

        <TicketList
          type="functionlist"
          passagens={passagens}
          func={handleCompra}
        />

        <h2 id="compradas">Passagens Compradas</h2>
        <TicketList type="simplelist" passagens={compradas} />
      </div>
      <Footer />
    </>
  );
};

export default App;
