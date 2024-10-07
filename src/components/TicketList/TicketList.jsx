import Ticket from "../Ticket/Ticket";
import Button from "../Button/Button";
import "./TicketList.css";
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
