import { Link } from "react-router";
 


const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#f8f6f1] text-[#163f63]">
            
            <main className="mx-auto max-w-[1440px] px-10 py-7">
                <div className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-[#163f63]">
                    LiAqui / Administração
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

                <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="rounded-xl bg-[#163f63] p-7 text-white">
                        <p className="text-[9px] font-semibold uppercase tracking-wide text-white/60">
                            Sua comunidade
                        </p>

                        <h2 className="mt-4 font-serif text-3xl">
                            Cada leitor conta.
                        </h2>

                        <p className="mt-3 max-w-sm text-xs leading-5 text-white/70">
                            Consulte os cadastros e acompanhe o status de cada
                            pessoa em um só lugar.
                        </p>

                        <Link
                            to="/dashboard/users"
                            className="mt-6 flex items-center justify-between rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#163f63] transition hover:bg-gray-100"
                        >
                            Ver todos os usuários
                            <span>→</span>
                        </Link>

                        <p className="mt-5 text-[10px] text-white/50">
                            8 usuários · 5 ativos
                        </p>
                    </div>

                    <div className="rounded-xl border border-[#e4e1da] bg-white p-7 lg:col-span-2">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                                    Biblioteca
                                </p>

                                <h2 className="mt-2 font-serif text-2xl text-[#163f63]">
                                    Atividade literária
                                </h2>
                            </div>

                            <Link
                                to="/dashboard/livros"
                                className="text-xs font-medium text-[#163f63]"
                            >
                                Ver livros →
                            </Link>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <InfoItem
                                title="Novos livros"
                                value="+12"
                                text="este mês"
                            />

                            <InfoItem
                                title="Novas avaliações"
                                value="+48"
                                text="este mês"
                            />

                            <InfoItem
                                title="Leituras concluídas"
                                value="27"
                                text="este mês"
                            />

                            <InfoItem
                                title="Listas criadas"
                                value="16"
                                text="este mês"
                            />
                        </div>
                    </div>
                </section>

                
                <footer className="flex justify-between py-6 text-[9px] text-gray-400">
                    <span>LiAqui. · Espaço de administração</span>
                    <span>Prévia com dados de exemplo</span>
                </footer>
            </main>
        </div>
    );
};


const InfoItem = ({ title, value, text }) => {
    return (
        <div className="border-t border-[#e4e1da] pt-4">
            <p className="text-[9px] text-gray-400">{title}</p>

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

const UserRow = ({ name, email, status, date, access }) => {
    const ativo = status === "Ativo";

    return (
        <div className="grid grid-cols-[1.5fr_0.7fr_0.7fr_0.8fr_1fr] items-center border-b border-[#e4e1da] px-5 py-4 text-[9px] text-gray-500">
            <div>
                <p className="font-semibold text-[#163f63]">{name}</p>
                <p className="mt-1 text-[8px] text-gray-400">{email}</p>
            </div>

            <div>
                <span
                    className={`rounded-full px-3 py-1 text-[8px] ${
                        ativo
                            ? "bg-[#e8f3ee] text-[#438064]"
                            : "bg-[#faf1dd] text-[#a8792e]"
                    }`}
                >
                    {status}
                </span>
            </div>

            <span className="text-gray-500">Leitor</span>
            <span>{date}</span>
            <span>{access}</span>
        </div>
    );
};

export default Dashboard;