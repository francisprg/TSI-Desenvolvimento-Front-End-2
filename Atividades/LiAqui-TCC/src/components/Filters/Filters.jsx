import './style.css'

function Filters() {
    return (
        <div className="filtros-home">
            <button id="btn-todos" className="filtro-btn ativo">Todos</button>
            <button id="btn-recentes" className="filtro-btn">Recentes</button>
            <button id="btn-portugues" className="filtro-btn">Portugues</button>
            <button id="btn-ingles" className="filtro-btn">Ingles</button>
        </div>
    );
}

export default Filters;
