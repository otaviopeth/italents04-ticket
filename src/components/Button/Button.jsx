import './Button.css'

const Button = ({ onClick, type, children }) => (
  <button onClick={onClick} type={type}>{children}</button>
);
export default Button;