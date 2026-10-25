
import { useParams } from 'react-router';
import PerfilSidebar from '../../components/PerfilSidebar/PerfilSidebar';
import CartaoResenha from '../../components/CartaoResenha/CartaoResenha';
import './style.css';
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
      <main className="perfil">
        <p className="perfil-vazio">Perfil não encontrado.</p>
      </main>
    );
  }

    

  return (
    
    <main className="perfil">
      <div className="container-perfil">
        <PerfilSidebar
          leitor={leitor}
          totalResenhas={resenhasFiltradas.length}
        />

        <section className="perfil-conteudo" aria-labelledby="perfil-titulo">
          <h1 id="perfil-titulo">Perfil de {leitor.nome}</h1>
          <h2 className="perfil-secao-titulo">Histórico de resenhas</h2>

          <div className="lista-resenhas">
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
