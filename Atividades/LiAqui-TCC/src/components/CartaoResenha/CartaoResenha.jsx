import './style.css';

function CartaoResenha({ resenha }) {
  const totalComentarios = resenha.comentarios.length;

  return (
    <article className="cartao-resenha">
      <img src={resenha.capa} alt={`Capa de ${resenha.titulo}`} className="cartao-resenha-capa" />

      <div className="cartao-resenha-info">
        <h3>{resenha.titulo}</h3>
        {resenha.estrelas != null && (
          <span className="cartao-resenha-estrelas" aria-label={`${resenha.estrelas} de 5 estrelas`}>
            {'★'.repeat(resenha.estrelas)}{'☆'.repeat(5 - resenha.estrelas)}
          </span>
        )}
        {resenha.texto && <p className="cartao-resenha-texto">{resenha.texto}</p>}
        <time className="cartao-resenha-data" dateTime={resenha.data}>
          {resenha.data.split('-').reverse().join('/')}
        </time>

        <div className="cartao-resenha-acoes">
          {resenha.texto && <button type="button" disabled>Editar</button>}
          <button type="button" className="cartao-resenha-acoes-deletar" disabled>Deletar</button>
          {resenha.estrelas != null && (
            <button type="button" className="cartao-resenha-acoes-deletar" disabled>Deletar avaliação</button>
          )}
        </div>

        <button type="button" className="link-comentarios" disabled>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
          </svg>
          {totalComentarios === 0 ? 'Comentar' : `${totalComentarios} comentário${totalComentarios === 1 ? '' : 's'}`}
        </button>
      </div>
    </article>
  );
}

export default CartaoResenha;
