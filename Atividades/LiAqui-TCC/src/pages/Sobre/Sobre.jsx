

function Sobre() {
  return (
    <>

      <main className="min-h-[calc(100vh-4rem)] bg-[#faf6ee] px-4 py-12 font-sans text-[#16304d] max-[36rem]:py-6">
        <section className="mx-auto max-w-[45rem] rounded-xl border border-[#e3dfd5] bg-white p-8 max-[36rem]:p-5" aria-labelledby="sobre-titulo">
          <h1 className="mb-6 font-serif text-2xl">Sobre o LiAqui</h1>
          <p className="leading-7 text-[#5a6a7e]">
            O LiAqui é um projeto voltado à leitura e à troca de experiências literárias.
          </p>
          <p className="mt-4 leading-7 text-[#5a6a7e]">
            A proposta é reunir livros, avaliações e resenhas em um só lugar,
            ajudando leitores a organizar suas leituras e descobrir novas obras.
          </p>
        </section>
      </main>

    </>
  );
}

export default Sobre;
