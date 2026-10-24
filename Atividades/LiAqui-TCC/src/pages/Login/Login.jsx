import { Link } from 'react-router';
import '../Cadastro/style.css';

function Login() {
  return (
    <main className="login-cadastro">
      <div className="login-intro">
        <h1>Bem-vindo ao LiAqui</h1>
        <p>Registre suas leituras, escreva resenhas e descubra novos livros.</p>
      </div>

      <div className="auth-card">
        <div className="auth-conteudo">
          <h2 className="auth-titulo">Entrar</h2>

          <form noValidate onSubmit={(event) => event.preventDefault()}>
            <div className="campo">
              <label htmlFor="email-input">Email</label>
              <input id="email-input" type="email" name="email" placeholder="seu@email.com" autoComplete="email" />
            </div>

            <div className="campo">
              <label htmlFor="senha-input">Senha</label>
              <input id="senha-input" type="password" name="senha" placeholder="••••••••" autoComplete="current-password" />
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
  );
}

export default Login;
