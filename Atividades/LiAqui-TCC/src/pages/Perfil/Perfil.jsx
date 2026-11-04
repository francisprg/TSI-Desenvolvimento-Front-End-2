
import { useParams } from 'react-router';
import PerfilSidebar from '../../components/PerfilSidebar/PerfilSidebar';
import CartaoResenha from '../../components/CartaoResenha/CartaoResenha';
import { useContext } from 'react';
import MockDadosContext from '../../contexts/MockDadosContext';

function Perfil() {
  const { Leitores, Resenhas } = useContext(MockDadosContext);

  const { id } = useParams();
  const leitorId = Number(id);

  const leitor = Leitores.find((leitor) => leitor.id === leitorId);
  
  const resenhasFiltradas = Resenhas.filter(
    (resenha) => resenha.leitorId === leitorId
  );

  if (!leitor) {
    return (
        <main className="min-h-[calc(100vh-4rem)] bg-[#faf6ee] px-4 py-12 font-sans text-[#16304d]">
        <p className="rounded-xl border border-[#e3dfd5] bg-white p-8 text-center text-[#5a6a7e]">Perfil não encontrado.</p>
      </main>
    );
  }

    

  return (
    
    <main className="min-h-[calc(100vh-4rem)] bg-[#faf6ee] px-4 py-12 font-sans text-[#16304d] max-md:py-6">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[17rem_minmax(0,1fr)] gap-8 max-md:grid-cols-1">
        <PerfilSidebar
          leitor={leitor}
          totalResenhas={resenhasFiltradas.length}
        />

        <section className="min-w-0" aria-labelledby="perfil-titulo">
          <h1 className="mb-7 font-serif text-3xl" id="perfil-titulo">Perfil de {leitor.nome}</h1>
          <h2 className="mb-5 text-lg">Histórico de resenhas</h2>

          <div className="grid gap-5">
            {resenhasFiltradas.map((resenha) => (
              <CartaoResenha
                key={resenha.id}
                resenha={resenha}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Perfil;
