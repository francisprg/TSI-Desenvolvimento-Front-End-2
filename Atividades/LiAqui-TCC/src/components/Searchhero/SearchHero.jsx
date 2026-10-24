
import './style.css'


function SearchHero() {

    return (
        <div className="busca-avancada busca-avancada--hero">
            <svg
                className="hero-busca-icone"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Busque por título, autor ou editora" />
            <div className="busca-avancada-separador"></div>
            <label htmlFor="busca-filtro" className="visually-hidden">
                Filtrar por
            </label>
            <select className="busca-filtro" id="busca-filtro">
                <option value="titulo">Título</option>
                <option value="autor">Autor</option>
                <option value="editora">Editora</option>
            </select>
        </div>
    )
}


export default SearchHero