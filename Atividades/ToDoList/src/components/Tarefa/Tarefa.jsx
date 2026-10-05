import { useRef, useState } from 'react';
import './style.css';

function Tarefa({
  tarefa,
  aoExcluir,
  AdicionarEtapa,
  deletarEtapa,
  editarTarefa
}) {
  const [mostrarDescricao, setMostrarDescricao] = useState(false);
  const [mostrarEtapas, setMostrarEtapas] = useState(false);
  const InputEtapa = useRef(null);
  const InputTitulo = useRef(null);
  const InputDescricao = useRef(null);

  const [editando, setEditando] = useState(false);

  const etapas = tarefa.etapas || [];

  function criarEtapa(event) {
    event.preventDefault();

    const textoEtapa = InputEtapa.current.value.trim();

    if (!textoEtapa.trim()) return;

    AdicionarEtapa(tarefa.id, textoEtapa.trim());
    InputEtapa.current.value = '';
    setMostrarEtapas(true);
  }

  function iniciarEdicao() {
    setEditando(true);
  }

  function salvarEdicao(event) {
    event.preventDefault();

    const tituloEditado = InputTitulo.current.value.trim();
    const descricaoEditada = InputDescricao.current.value.trim();

    if (!tituloEditado.trim()) return;

    editarTarefa(
      tarefa.id,
      tituloEditado.trim(),
      descricaoEditada.trim()
    );

    setEditando(false);
  }

  let conteudoEdicao;

  if (editando) {
    // Durante a edição, mostra os campos e os botões de salvar e cancelar.
    conteudoEdicao = (
        <form onSubmit={salvarEdicao}>
          <input
            type="text"
            aria-label="Título da tarefa"
            ref={InputTitulo}
            defaultValue={tarefa.titulo}
          />

          <textarea
            aria-label="Descrição da tarefa"
            ref={InputDescricao}
            defaultValue={tarefa.descricao || ''}
          />

          <button type="submit">Salvar</button>
          <button type="button" onClick={() => setEditando(false)}>
            Cancelar
          </button>
        </form>
    );
  } else {
    // Fora da edição, mostra o título da tarefa.
    conteudoEdicao = (
        <h3 className="task-title">{tarefa.titulo}</h3>
    );
  }

  return (
    <div className="task-card">
      {conteudoEdicao}

      <div className="task-icons">
        <button
          type="button"
          className="icon-btn icon-delete"
          aria-label="Excluir"
          onClick={() => aoExcluir(tarefa.id)}
        >
          ✕
        </button>

        <button
          type="button"
          className="icon-btn icon-edit"
          aria-label="Editar"
          onClick={iniciarEdicao}
        >
          ✎
        </button>
      </div>

      <button
        type="button"
        className="task-desc-button"
        onClick={() => setMostrarDescricao(!mostrarDescricao)}
      >
        {mostrarDescricao ? '▼' : '▶'} Descrição
      </button>

      {mostrarDescricao && (
        <p className="task-desc">{tarefa.descricao}</p>
      )}

      <button
        type="button"
        className="task-desc-button"
        onClick={() => setMostrarEtapas(!mostrarEtapas)}
      >
        {mostrarEtapas ? '▼' : '▶'} Etapas ({etapas.length})
      </button>

      {mostrarEtapas && (
        <div>
          <form onSubmit={criarEtapa}>
            <input
              type="text"
              placeholder="Digite uma etapa"
              ref={InputEtapa}
            />

            <button type="submit">Adicionar</button>
          </form>

          <ol>
            {etapas.map((etapa) => (
              <li key={etapa.id}>
                {etapa.texto}

                <button
                  type="button"
                  aria-label={`Excluir etapa ${etapa.texto}`}
                  onClick={() => deletarEtapa(tarefa.id, etapa.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default Tarefa;
