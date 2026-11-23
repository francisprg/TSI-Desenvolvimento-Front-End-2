import { useAuthContext } from "../../contexts/AuthContext";
import { use, useState } from "react";


const Dashboard = ({
    usersPromisse,
    livrosPromisse,
    autoresPromisse
}) => {

    const { logout } = useAuthContext();

    const [selected, setSelected] = useState("leitores");

    const users = use(usersPromisse);
    const livros = use(livrosPromisse);
    const autores = use(autoresPromisse);


    function handleLogout(event) {
        event.preventDefault();
        logout();
    }


    return (

        <div className="min-h-screen bg-[#f8f6f1] text-[#163f63]">

            <main className="mx-auto max-w-[1440px] px-10 py-7">

                <div className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-[#163f63]">
                    LiAqui / Administração
                </div>


                <div className="flex justify-end">

                    <svg
                        className="cursor-pointer"
                        onClick={handleLogout}
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>

                </div>


                <div className="flex items-end justify-between border-b border-[#e4e1da] pb-8">

                    <div>

                        <h1 className="font-serif text-5xl font-semibold tracking-tight text-[#163f63]">
                            Bem-vindo, ADM.
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            Um olhar sobre sua comunidade de leitores.
                        </p>

                    </div>


                    <div className="text-right">

                        <p className="text-[9px] font-semibold uppercase text-gray-400">
                            Painel administrativo
                        </p>

                        <p className="mt-1 text-xs text-[#163f63]">
                            15 de novembro de 2026
                        </p>

                    </div>

                </div>


                {/* PAINEL ADMINISTRATIVO */}

                <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">


                    {/* MENU LATERAL */}

                    <div className="rounded-xl border border-[#e4e1da] bg-white p-5">

                        <p className="mb-4 text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                            Administração
                        </p>


                        <button
                            onClick={() => setSelected("leitores")}
                            className={`w-full rounded-lg px-4 py-3 text-left text-xs font-semibold transition
                                ${selected === "leitores"
                                    ? "bg-[#163f63] text-white"
                                    : "text-[#163f63] hover:bg-[#f8f6f1]"
                                }`}
                        >
                            Leitores
                        </button>


                        <button
                            onClick={() => setSelected("livros")}
                            className={`mt-2 w-full rounded-lg px-4 py-3 text-left text-xs font-semibold transition
                                ${selected === "livros"
                                    ? "bg-[#163f63] text-white"
                                    : "text-[#163f63] hover:bg-[#f8f6f1]"
                                }`}
                        >
                            Livros
                        </button>


                        <button
                            onClick={() => setSelected("autores")}
                            className={`mt-2 w-full rounded-lg px-4 py-3 text-left text-xs font-semibold transition
                                ${selected === "autores"
                                    ? "bg-[#163f63] text-white"
                                    : "text-[#163f63] hover:bg-[#f8f6f1]"
                                }`}
                        >
                            Autores
                        </button>

                    </div>


                    {/* CONTEÚDO */}

                    <div className="rounded-xl border border-[#e4e1da] bg-white p-7">


                        {/* LEITORES */}

                        {selected === "leitores" && (

                            <div>

                                <div className="flex items-start justify-between border-b border-[#e4e1da] pb-5">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                                            Usuários
                                        </p>

                                        <h2 className="mt-2 font-serif text-3xl text-[#163f63]">
                                            Leitores
                                        </h2>

                                    </div>

                                    <button
                                        type="button"
                                        className="rounded-lg bg-[#163f63] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0f2f49]"
                                    >
                                        Criar usuário
                                    </button>
                                </div>


                                <div className="mt-6">

                                    <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#e4e1da] px-6 pb-3 text-sm font-semibold uppercase text-gray-400">
                                        <span>Nome</span>
                                        <span>Email</span>
                                        <span>Data de criação</span>
                                    </div>


                                    {users.map((user) => (

                                        <UserRow
                                            key={user.idLeitor}
                                            name={user.name ?? `${user.nome ?? ""} ${user.sobrenome ?? ""}`.trim()}
                                            email={user.email}
                                            date={user.created_at ?? "-"}
                                        />

                                    ))}

                                </div>

                            </div>

                        )}


                        {/* LIVROS */}

                        {selected === "livros" && (

                            <div>

                                <div className="flex items-start justify-between border-b border-[#e4e1da] pb-5">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                                            Biblioteca
                                        </p>

                                        <h2 className="mt-2 font-serif text-3xl text-[#163f63]">
                                            Livros
                                        </h2>

                                    </div>

                                    <button
                                        type="button"
                                        className="rounded-lg bg-[#163f63] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0f2f49]"
                                    >
                                        Criar livro
                                    </button>
                                </div>


                                {/* LISTA DE LIVROS */}

                                <div className="mt-6">

                                    {livros.map((livro) => (

                                        <div
                                            key={livro.idLivro}
                                            className="flex items-center justify-between border-b border-[#e4e1da] py-4"
                                        >

                                            <div>

                                                <p className="font-semibold text-[#163f63]">
                                                    {livro.titulo}
                                                </p>

                                                <p className="mt-1 text-xs text-gray-400">
                                                    {livro.autor?.nome ?? "Autor não informado"}
                                                </p>

                                            </div>


                                            <span className="text-xs text-gray-400">
                                                {livro.isbn ?? "-"}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        )}


                        {/* AUTORES */}

                        {selected === "autores" && (

                            <div>

                                <div className="flex items-start justify-between border-b border-[#e4e1da] pb-5">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                                            Biblioteca
                                        </p>

                                        <h2 className="mt-2 font-serif text-3xl text-[#163f63]">
                                            Autores
                                        </h2>

                                    </div>

                                    <button
                                        type="button"
                                        className="rounded-lg bg-[#163f63] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0f2f49]"
                                    >
                                        Criar autor
                                    </button>
                                </div>


                                {/* LISTA DE AUTORES */}

                                <div className="mt-6">

                                    {autores.map((autor) => (

                                        <div
                                            key={autor.idAutor}
                                            className="flex items-center justify-between border-b border-[#e4e1da] py-4"
                                        >

                                            <div>

                                                <p className="font-semibold text-[#163f63]">
                                                    {autor.nome}
                                                </p>

                                                <p className="mt-1 text-xs text-gray-400">
                                                    {autor.nacionalidade ?? "Nacionalidade não informada"}
                                                </p>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        )}

                    </div>

                </section>


                <footer className="flex justify-between py-6 text-[9px] text-gray-400">

                    <span>
                        LiAqui. · Espaço de administração
                    </span>

                    <span>
                        Prévia com dados de exemplo
                    </span>

                </footer>

            </main>

        </div>

    );
};


const InfoItem = ({ title, value, text }) => {

    return (

        <div className="border-t border-[#e4e1da] pt-4">

            <p className="text-[9px] text-gray-400">
                {title}
            </p>

            <div className="mt-1 flex items-baseline gap-2">

                <span className="font-serif text-2xl text-[#163f63]">
                    {value}
                </span>

                <span className="text-[9px] text-gray-400">
                    {text}
                </span>

            </div>

        </div>

    );
};


const UserRow = ({ name, email, date }) => {
    return (
        <div className="grid grid-cols-[1fr_1fr_1fr] items-center border-b border-[#e4e1da] px-6 py-5 text-sm text-gray-500">
            <p className="text-base font-semibold text-[#163f63]">
                {name}
            </p>
            <p className="text-sm text-gray-500">
                {email}
            </p>
            <p className="text-sm text-gray-500">
                {date}
            </p>
        </div>

    );
};


export default Dashboard;