import {
  cartaoResenhaAcoes,
  cartaoResenhaArticle,
  cartaoResenhaCapa,
  cartaoResenhaData,
  cartaoResenhaEstrelas,
  cartaoResenhaInfo,
  cartaoResenhaTitulo,
  cartaoResenhaTexto,
  botaoAcao,
  cartaoResenhaAcoesDeletar,
  linkComentarios,
} from './style.jsx';

function CartaoResenha({ resenha }) {
  const totalComentarios = resenha.comentarios.length;

  return (
    <article style={cartaoResenhaArticle}>
      <img style={cartaoResenhaCapa} src={resenha.capa} alt={`Capa de ${resenha.titulo}`} />

      <div style={cartaoResenhaInfo}>
        <h3 style={cartaoResenhaTitulo}>{resenha.titulo}</h3>
        {resenha.estrelas != null && (
          <span style={cartaoResenhaEstrelas} aria-label={`${resenha.estrelas} de 5 estrelas`}>
            {'★'.repeat(resenha.estrelas)}{'☆'.repeat(5 - resenha.estrelas)}
          </span>
        )}
        {resenha.texto && <p style={cartaoResenhaTexto}>{resenha.texto}</p>}
        <time style={cartaoResenhaData} dateTime={resenha.data}>
          {resenha.data.split('-').reverse().join('/')}
        </time>

        <div style={cartaoResenhaAcoes}>
          {resenha.texto && <button style={botaoAcao} type="button" disabled>Editar</button>}
          <button style={cartaoResenhaAcoesDeletar} type="button" disabled>Deletar</button>
          {resenha.estrelas != null && (
            <button style={cartaoResenhaAcoesDeletar} type="button" disabled>Deletar avaliação</button>
          )}
        </div>

        <button style={linkComentarios} type="button" disabled>
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
