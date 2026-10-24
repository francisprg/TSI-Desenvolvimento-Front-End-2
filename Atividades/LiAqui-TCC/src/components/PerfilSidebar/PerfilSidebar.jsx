import './style.css';

function PerfilSidebar({ leitor, totalResenhas }) {
  return (
    <aside className="perfil-sidebar">
      {leitor.foto && <img src={leitor.foto} alt={leitor.nome ? `Foto de ${leitor.nome}` : 'Foto de perfil'} className="perfil-foto" />}
      {leitor.nome && <h2 className="perfil-nome">{leitor.nome}</h2>}
      {leitor.apelido && <span className="perfil-usuario">@{leitor.apelido}</span>}
      {leitor.bio && <p className="perfil-bio">{leitor.bio}</p>}

      <div className="perfil-stats">
        <span>Resenhas</span>
        <strong>{totalResenhas}</strong>
      </div>

      <div className="perfil-conta-acoes">
        <button type="button" className="perfil-btn" disabled>Editar perfil</button>
        <button type="button" className="perfil-btn-deletar" disabled>Deletar minha conta</button>
      </div>
    </aside>
  );
}

export default PerfilSidebar;
