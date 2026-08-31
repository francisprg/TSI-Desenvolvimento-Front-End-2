import './style.css'

function Filters() {
    return (
        <div class="filtros-home">
            <button id="btn-todos" class="filtro-btn ativo">Todos</button>
            <button id="btn-recentes" class="filtro-btn">Recentes</button>
            <button id="btn-portugues" class="filtro-btn">Portugues</button>
            <button id="btn-ingles" class="filtro-btn">Ingles</button>
        </div>
    );
}

export default Filters;