
import './style.css'



function Avatar() {
  return (
    <button type="button" id="foto-perfil-btn">
      <img
        src="/src/assets/userlogo.png"
        alt="Foto do usuário"
        className="foto-perfil-img"
      />
    </button>
  );
}

export default Avatar;