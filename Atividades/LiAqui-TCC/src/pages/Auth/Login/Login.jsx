import { Link, Navigate, useNavigate } from 'react-router';
import '../style.scss'
import { useRef } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';





function Login() {


  const { auth } = useAuthContext();

  const navigate = useNavigate();

  const emailInputRef = useRef();
  const senhaInputRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      email: emailInputRef.current.value,
      password: senhaInputRef.current.value,
    };
    console.log({ payload });
    try {
      await auth(payload)
      navigate("/home");
    } catch (error) {
      console.dir({ error });
      console.error(error?.response?.data?.message);
    }
  };


  return (

    <>


      <main className="login-cadastro">
        <div className="login-intro">
          <h1>Bem-vindo ao LiAqui</h1>
          <p>Registre suas leituras, escreva resenhas e descubra novos livros.</p>
        </div>

        <div className="auth-card">
          <div className="auth-conteudo">
            <h2 className="auth-titulo">Entrar</h2>

            <form onSubmit={onSubmit}>
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
