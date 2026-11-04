function ModalResenha({ tipo, resenha }) {
  const editando = tipo === 'editar';

  return (
    <dialog className="m-auto max-h-[calc(100dvh-2rem)] w-[min(32rem,calc(100%-2rem))] rounded-xl border border-[#e3dfd5] bg-white p-0 font-sans text-[#16304d] backdrop:bg-[rgba(22,48,77,0.5)]" aria-labelledby="modal-resenha-titulo">
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl" id="modal-resenha-titulo">{editando ? 'Editar resenha' : 'Comentários'}</h2>
          <button type="button" className="cursor-pointer border-0 bg-transparent p-2 text-lg text-inherit" aria-label="Fechar" disabled>✕</button>
        </div>
        <p className="my-2 mb-5 leading-normal text-[#5a6a7e]">{resenha.titulo}</p>

        {!editando && (
          <div className="mb-6 grid max-h-60 gap-4 overflow-y-auto leading-relaxed text-[#5a6a7e]">
            {resenha.comentarios.length === 0 && <p>Nenhum comentário ainda.</p>}
            {resenha.comentarios.map((comentario) => (
              <div className="border-b border-[#e3dfd5] pb-3 wrap-anywhere" key={comentario.id}>
                <strong className="text-[#16304d]">{comentario.autor}</strong>
                <p className="whitespace-pre-wrap">{comentario.texto}</p>
              </div>
            ))}
          </div>
        )}

        <div className="grid gap-3">
          <label htmlFor="modal-resenha-texto">{editando ? 'Sua resenha' : 'Adicionar um comentário'}</label>
          <textarea className="w-full resize-y rounded-md border border-[#ccd2d9] p-3 leading-normal text-inherit focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#3c6e9c]" id="modal-resenha-texto" name="texto" rows={editando ? 6 : 3} defaultValue={editando ? resenha.texto : ''} />
          <button type="button" className="cursor-pointer rounded-md border-0 bg-[#16304d] px-4 py-3 font-semibold text-white disabled:cursor-default disabled:opacity-55 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#3c6e9c]" disabled>{editando ? 'Salvar' : 'Comentar'}</button>
        </div>
      </div>
    </dialog>
  );
}

export default ModalResenha;
