import './style.css';

function ModalResenha({ tipo, resenha }) {
  const editando = tipo === 'editar';

  return (
    <dialog className="modal-resenha" aria-labelledby="modal-resenha-titulo">
      <div className="modal-resenha-conteudo">
        <div className="modal-resenha-cabecalho">
          <h2 id="modal-resenha-titulo">{editando ? 'Editar resenha' : 'Comentários'}</h2>
          <button type="button" className="modal-resenha-fechar" aria-label="Fechar" disabled>✕</button>
        </div>
        <p className="modal-resenha-livro">{resenha.titulo}</p>

        {!editando && (
          <div className="modal-resenha-lista">
            {resenha.comentarios.length === 0 && <p>Nenhum comentário ainda.</p>}
            {resenha.comentarios.map((comentario) => (
              <div className="modal-resenha-comentario" key={comentario.id}>
                <strong>{comentario.autor}</strong>
                <p>{comentario.texto}</p>
              </div>
            ))}
          </div>
        )}

        <div className="modal-resenha-form">
          <label htmlFor="modal-resenha-texto">{editando ? 'Sua resenha' : 'Adicionar um comentário'}</label>
          <textarea id="modal-resenha-texto" name="texto" rows={editando ? 6 : 3} defaultValue={editando ? resenha.texto : ''} />
          <button type="button" className="perfil-btn" disabled>{editando ? 'Salvar' : 'Comentar'}</button>
        </div>
      </div>
    </dialog>
  );
}

export default ModalResenha;
