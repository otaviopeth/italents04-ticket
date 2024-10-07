import Ticket from "../Ticket/Ticket";
import Button from "../Button/Button";
import "./TicketList.css";

// Recebe um array de passagens e converte em uma lista usando a função map
const TicketList = ({ passagens, type, func }) => {
  return (
    <>
      <ul>
        {passagens.map((p) => (
          <li key={p.id}>
            <Ticket passagem={p} />
            {type === "functionlist" && (
              <Button onClick={() => func(p.id)}>Comprar</Button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TicketList;
