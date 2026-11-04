


function SearchHero() {

    return (
        <div className="group flex w-full max-w-xl items-center overflow-hidden rounded-full border-2 border-[#d9d1bd] bg-white shadow-[0_0.5rem_1.75rem_rgba(22,48,79,0.10)] transition duration-200 focus-within:border-[#3c6e9c] focus-within:shadow-[0_0_0_0.1875rem_rgba(60,110,156,0.14),0_0.5rem_1.75rem_rgba(22,48,79,0.10)] lg:max-w-[38rem]">
            <svg
                className="ml-5 shrink-0 text-[#aab4c0] transition-colors duration-200 group-focus-within:text-[#3c6e9c]"
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
            <input className="min-w-0 flex-1 border-0 bg-transparent py-4 pr-2 pl-3 text-base text-[#16304d] outline-none placeholder:text-[#aab4c0]" type="text" placeholder="Busque por título, autor ou editora" />
            <div className="h-6 w-px shrink-0 bg-[#e4dcc9]"></div>
            <label htmlFor="busca-filtro" className="sr-only">
                Filtrar por
            </label>
            <div className="relative">
                <select className="cursor-pointer appearance-none border-0 bg-transparent py-4 pr-7 pl-4 text-sm text-[#5a6a7e] outline-none"
                    id="busca-filtro">
                    <option value="titulo">Título</option>
                    <option value="autor">Autor</option>
                    <option value="editora">Editora</option>
                </select>
                <svg className="pointer-events-none absolute top-1/2 right-1.5 size-3 -translate-y-1/2 text-[#8a9ab0]" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                    <path d="M6 8 1 3h10z" />
                </svg>
            </div>
        </div>
    )
}


export default SearchHero
