
import { Link } from 'react-router';
import './style.css'



function Avatar() {
  return (
    <Link to="/perfil/1" id="foto-perfil-btn" aria-label="Meu perfil">
      <img
        src="/src/assets/userlogo.png"
        alt="Foto do usuário"
        className="foto-perfil-img"
      />
    </Link>
  );
}

export default Avatar;
