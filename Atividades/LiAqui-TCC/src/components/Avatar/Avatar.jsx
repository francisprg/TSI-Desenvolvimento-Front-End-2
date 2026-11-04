import { Link } from 'react-router';
import userLogo from '../../assets/userlogo.png';

function Avatar() {
  return (
    <Link
      to="/perfil/1"
      aria-label="Meu perfil"
      className="group inline-block cursor-pointer rounded-full"
    >
      <img
        src={userLogo}
        alt="Foto do usuário"
        className="size-9 rounded-full border-2 border-[#e0e0e0] object-cover transition-colors duration-200 pointer-events-none group-hover:border-[#3c6e9c] group-focus-visible:border-[#3c6e9c]"
      />
    </Link>
  );
}

export default Avatar;