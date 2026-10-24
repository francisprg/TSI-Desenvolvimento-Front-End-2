import './style.css'
import { Link } from 'react-router';

function Navbar() {
  return (
    <ul className="nav-links">
      <li>
        <Link to='/'>
          <svg className="nav-icone" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 9.5 12 3l9 6.5" />
            <path d="M5 9.5V21h14V9.5" />
            <path d="M9 21v-6h6v6" />
          </svg>
          Início
         </Link>
      </li>
      <li>
        {/* O número 1 será recebido como id pelo useParams() da página Perfil. */}
        <Link to='/perfil/1'>
          <svg className="nav-icone" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
          </svg>
          Meu perfil
       </Link>
      </li>
      <li>
        <Link to="/sobre">
          <svg className="nav-icone" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v6" />
            <path d="M12 7h.01" />
          </svg>
          Sobre
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
