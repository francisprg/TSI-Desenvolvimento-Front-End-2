import { Link, useNavigate } from 'react-router';
import fotoPerfil from '../../assets/userlogo.png';
import './style.css'
import { useState } from 'react';



function Cadastro() {

  const [mensagemLogin, setmensagemLogin] = useState(" ");
  const navigate = useNavigate();

  
  
  function handleSubmit(event) {

    event.preventDefault();

    setmensagemLogin("Cadastro realizado com sucesso")

    setTimeout(() => {
      navigate("/");
    }, 3000)
  }




  return (
    <main className="login-cadastro">
      <div className="login-intro">

        <p className="mensagem-login">{mensagemLogin}</p>
        <h1>Crie sua conta no LiAqui</h1>
        <p>Registre suas leituras, escreva resenhas e descubra novos livros.</p>
      </div>
      <div className="auth-card">
        <div className="auth-conteudo">
          <h2 className="auth-titulo">Cadastrar</h2>

          <form noValidate onSubmit={handleSubmit}>
            <div className="container-foto">
              <img src={fotoPerfil} alt="Foto de perfil padrão" />
              <input id="input-arquivo" name="fotoLeitor" type="file" accept=".jpeg,.png,.jpg,.webp" />
              <label htmlFor="input-arquivo" className="btn-primario">Selecionar imagem</label>
            </div>

            <div className="campos-duplos">
              <div className="campo">
                <label htmlFor="nome-input">Nome</label>
                <input id="nome-input" type="text" name="nomeLeitor" placeholder="Nome" autoComplete="given-name" />
              </div>
              <div className="campo">
                <label htmlFor="sobrenome-input">Sobrenome</label>
                <input id="sobrenome-input" type="text" name="sobrenomeLeitor" placeholder="Sobrenome" autoComplete="family-name" />
              </div>
            </div>

            <div className="campo">
              <label htmlFor="apelido-input">Apelido (opcional)</label>
              <input id="apelido-input" type="text" name="apelidoLeitor" placeholder="Como quer ser chamado?" autoComplete="nickname" />
            </div>

            <div className="campo">
              <label htmlFor="email-cad-input">Email</label>
              <input id="email-cad-input" type="email" name="emailLeitor" placeholder="seu@email.com" autoComplete="email" />
            </div>

            <div className="campo">
              <label htmlFor="senha-cad-input">Senha</label>
              <input id="senha-cad-input" type="password" name="senhaLeitor" placeholder="Mínimo 8 caracteres" autoComplete="new-password" />
            </div>

            <div className="campo">
              <label htmlFor="nascimento-input">Data de nascimento</label>
              <input id="nascimento-input" type="date" name="datanascLeitor" autoComplete="bday" />
            </div>

            <button className="btn-primario" type="submit">Criar conta</button>
          </form>

          <p className="auth-troca">
            Já possui conta?{' '}
            <Link to="/login" className="auth-troca-link">Faça login</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Cadastro;
