import { use } from "react";

export default function ShowCardLivro({ loadLivros }) {

    const livro = use(loadLivros);

    console.log(livro);

    return (
        <main className="min-h-screen bg-[#f8f5ef] px-4 py-6">
            <div className="mx-auto max-w-6xl">

                {/* Informações principais */}
                <section className="rounded-xl bg-white p-5 shadow-sm">
                    <div className="flex flex-col gap-6 md:flex-row">

                        {/* Capa */}
                        <div className="flex justify-center md:w-56 md:shrink-0">
                            <img
                                src={livro.capa}
                                alt={`Capa de ${livro.titulo}`}
                                className="h-[350px] w-[230px] rounded-lg object-cover shadow-md"
                            />
                        </div>

                        {/* Informações */}
                        <div className="flex-1">

                            <h1 className="text-3xl font-bold text-[#263238]">
                                {livro.titulo}
                            </h1>

                            <p className="mt-1 text-lg text-[#6b7280]">
                                {livro.autor?.nome}
                            </p>

                            {/* Avaliação */}
                            <div className="mt-3 flex items-center gap-2">
                                <span className="text-xl text-[#e0a83e]">
                                    ★★★★★
                                </span>

                                <span className="text-sm text-[#6b7280]">
                                    {livro.media_avaliacoes ?? 0} / 5
                                </span>
                            </div>

                            {/* Status */}
                            <div className="mt-4">
                                <p className="mb-2 text-sm font-semibold text-[#374151]">
                                    Status de leitura
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    <button className="rounded-lg border border-[#d8d2c5] px-3 py-1.5 text-sm hover:bg-[#f4f1eb]">
                                        Quero ler
                                    </button>

                                    <button className="rounded-lg border border-[#d8d2c5] px-3 py-1.5 text-sm hover:bg-[#f4f1eb]">
                                        Lendo
                                    </button>

                                    <button className="rounded-lg border border-[#d8d2c5] px-3 py-1.5 text-sm hover:bg-[#f4f1eb]">
                                        Lido
                                    </button>

                                    <button className="rounded-lg border border-[#d8d2c5] px-3 py-1.5 text-sm hover:bg-[#f4f1eb]">
                                        Abandonei
                                    </button>
                                </div>
                            </div>

                            {/* Dados */}
                            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">

                                <div>
                                    <span className="font-semibold text-[#374151]">
                                        Editora
                                    </span>

                                    <p className="text-[#6b7280]">
                                        {livro.editora}
                                    </p>
                                </div>

                                <div>
                                    <span className="font-semibold text-[#374151]">
                                        ISBN
                                    </span>

                                    <p className="text-[#6b7280]">
                                        {livro.isbn}
                                    </p>
                                </div>

                                <div>
                                    <span className="font-semibold text-[#374151]">
                                        Ano
                                    </span>

                                    <p className="text-[#6b7280]">
                                        {livro.ano_publicacao}
                                    </p>
                                </div>

                                <div>
                                    <span className="font-semibold text-[#374151]">
                                        Idioma
                                    </span>

                                    <p className="text-[#6b7280]">
                                        {livro.idioma}
                                    </p>
                                </div>

                                <div>
                                    <span className="font-semibold text-[#374151]">
                                        Páginas
                                    </span>

                                    <p className="text-[#6b7280]">
                                        {livro.numero_paginas}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Sinopse */}
                <section className="mt-4 rounded-xl bg-white p-5 shadow-sm">
                    <h2 className="text-xl font-bold text-[#263238]">
                        Sinopse
                    </h2>

                    <p className="mt-2 leading-6 text-[#6b7280]">
                        {livro.sinopse}
                    </p>
                </section>

                {/* Resenhas */}
                <section className="mt-4 rounded-xl bg-white p-5 shadow-sm">

                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-[#263238]">
                            Resenhas
                        </h2>

                        <span className="text-sm text-[#6b7280]">
                            {livro.resenha?.length ?? 0} resenhas
                        </span>
                    </div>

                    <div className="mt-4 space-y-3">

                        {livro.resenha?.length > 0 ? (

                            livro.resenha.map((resenha) => (
                                <article
                                    key={resenha.id}
                                    className="rounded-lg border border-[#e5e0d6] p-4"
                                >
                                    <div className="flex items-center justify-between">

                                        <h3 className="font-semibold text-[#263238]">
                                            {resenha.leitor?.nome}
                                        </h3>

                                        <span className="text-sm text-[#9ca3af]">
                                            {resenha.data}
                                        </span>

                                    </div>

                                    <p className="mt-2 leading-6 text-[#6b7280]">
                                        {resenha.texto}
                                    </p>
                                </article>
                            ))

                        ) : (

                            <div className="rounded-lg border-2 border-dashed border-[#e4dcc9] p-6 text-center text-sm italic text-[#aab4c0]">
                                Ainda não existem resenhas para este livro.
                            </div>

                        )}

                    </div>
                </section>

            </div>
        </main>
    );
}