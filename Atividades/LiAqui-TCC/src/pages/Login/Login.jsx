import { Link, Navigate, useNavigate } from 'react-router';
import './style.css'
import { useContext, useRef, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';

function Login() {

  const {login} = useContext(AuthContext);


  const emailInputRef = useRef(" ");
  const senhaInputRef = useRef(" ");

  const [erroMsg, seterroMsg] = useState();


  const navigate = useNavigate();

  function HandleSubmit(event) {
    event.preventDefault();

    const email = emailInputRef.current.value.trim();
    const senha = senhaInputRef.current.value;

    if (email === '') {
      seterroMsg('Preencha o e-mail.');
    } else if (!email.includes('@')) {
      seterroMsg('Digite um e-mail válido.');
    } else if (senha === '') {
      seterroMsg('Preencha a senha.');
    } else if (senha.length < 6) {
      seterroMsg('A senha deve ter pelo menos 6 caracteres.');
    } else {
      seterroMsg('');
      login();
      navigate('/home');
    }

    


  }

  return (

    <>
  

    <main className="login-cadastro">
      <div className="login-intro">
        <h1>Bem-vindo ao LiAqui</h1>
        <p>Registre suas leituras, escreva resenhas e descubra novos livros.</p>
      </div>

       <div className="error-message">{erroMsg}</div>
      <div className="auth-card">
        <div className="auth-conteudo">
          <h2 className="auth-titulo">Entrar</h2>

          <form noValidate onSubmit={HandleSubmit}>
            <div className="campo">
              <label htmlFor="email-input">Email</label>
              <input id="email-input" ref={emailInputRef} type="email" name="email" placeholder="seu@email.com" autoComplete="email" />
            </div>

            <div className="campo">
              <label htmlFor="senha-input">Senha</label>
              <input id="senha-input" ref={senhaInputRef} type="password" name="senha" placeholder="••••••••" autoComplete="current-password" />
            </div>

            <button className="btn-primario" type="submit">Entrar</button>
          </form>

          <p className="auth-troca">
            Ainda não tem conta?{' '}
            <Link to="/cadastro" className="auth-troca-link">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </main>

    </>
  );
}

export default Login;
