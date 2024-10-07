import './Alert.css'
import { IoAlertCircle } from "react-icons/io5";

const Alert = ({ message }) => (
  <div className="alert"><IoAlertCircle size={40} style={{color: '#ff0000'}}/>{message}</div>
);
export default Alert;