import './Header.css'
import Menu from '../Menu/Menu';

const Header = ({children}) => (
  <header>
    <div className="header-container">
    <h1>Ticket Simulator</h1>
    {children}
    </div>
    <Menu/>
  </header>
);

export default Header;