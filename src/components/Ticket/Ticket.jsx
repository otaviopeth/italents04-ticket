import "./Ticket.css";
import formatData from "../../utils/Util";
const Ticket = ({ passagem }) => {
  const data = formatData(passagem.data, "-");
  return (
    <div className="ticket-container">
      <p id="pheader">
        <span id="title">Ticket</span> Simulator
      </p>
      <div className="ticket-container-grid">
        <div className="side1">
          <div className="ticket-info-container">
            <p className="ticket-individual-info">{passagem.origem}</p>
            <p className="ticket-static-info">Origem</p>
          </div>
          <div className="ticket-info-container">
            <p className="ticket-individual-info">{passagem.destino}</p>
            <p className="ticket-static-info">Destino</p>
          </div>
        </div>
        <div className="side2">
          <div className="ticket-info-container">
            <p className="ticket-individual-info">{data}</p>
            <p className="ticket-static-info">Data</p>
          </div>
          <div className="ticket-info-container">
            <p className="ticket-individual-info">R$ {passagem.preco}</p>
            <p className="ticket-static-info">Preço</p>
          </div>
        </div>
        <div className="side3">
          <div className="ticket-info-container">
            <p className="ticket-poltrona">P{passagem.poltrona}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
