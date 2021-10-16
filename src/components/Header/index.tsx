import reactImg from '../../assets/react.jpeg';
import './styles.css';

function Header() {
  return (
    <nav className="Header">
      <img src={reactImg} className="logo-react" alt="react logo" />

      <h3>Desafio React JS - Exposição de dados de servidores em Datatable</h3>
    </nav>
  );
}

export default Header;
