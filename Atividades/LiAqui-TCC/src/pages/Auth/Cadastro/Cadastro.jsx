import { Link, useNavigate } from 'react-router';
import { useRef } from 'react';
import axiosClient from '../../../utils/axios-client';
import '../style.scss';

function Cadastro() {
  const navigate = useNavigate();

  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const onSubmit = async (event) => {
    try {
      event.preventDefault();

      const payload = {
        name: nameInputRef.current.value,
        surname: surnameInputRef.current.value,
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
        password_confirmation: confirmPasswordInputRef.current.value,
      };

      console.log({ payload });
      const response = await axiosClient.post("/users", payload);
      if (response?.status !== 201) throw new Error(response.data);
      console.log(response);
      const { data } = response;
      console.log({ data });
      alert("Usuário criado");
      navigate("/login");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <main className="login-cadastro">
      <div className="login-intro">
        <h1>Crie sua conta no LiAqui</h1>
        <p>
          Registre suas leituras, escreva resenhas e descubra novos livros.
        </p>
      </div>

      <div className="auth-card">
        <div className="auth-conteudo">
          <h2 className="auth-titulo">Cadastrar</h2>

          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-semibold text-[#163f63]"
              >
                Nome
              </label>

              <input
                ref={nameInputRef}
                id="name"
                type="text"
                name="name"
                placeholder="Seu nome"
                autoComplete="given-name"
                className="w-full rounded-lg border border-[#dcd9d2] bg-[#fdfcf9] px-4 py-3 text-sm text-[#163f63] outline-none focus:border-[#163f63]"
              />
            </div>

            <div>
              <label
                htmlFor="surname"
                className="mb-2 block text-xs font-semibold text-[#163f63]"
              >
                Sobrenome
              </label>

              <input
                ref={surnameInputRef}
                id="surname"
                type="text"
                name="surname"
                placeholder="Seu sobrenome"
                autoComplete="family-name"
                className="w-full rounded-lg border border-[#dcd9d2] bg-[#fdfcf9] px-4 py-3 text-sm text-[#163f63] outline-none focus:border-[#163f63]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold text-[#163f63]"
              >
                Email
              </label>

              <input
                ref={emailInputRef}
                id="email"
                type="email"
                name="email"
                placeholder="seu@email.com"
                autoComplete="email"
                className="w-full rounded-lg border border-[#dcd9d2] bg-[#fdfcf9] px-4 py-3 text-sm text-[#163f63] outline-none focus:border-[#163f63]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-xs font-semibold text-[#163f63]"
              >
                Senha
              </label>

              <input
                ref={passwordInputRef}
                id="password"
                type="password"
                name="password"
                placeholder="Digite sua senha"
                autoComplete="new-password"
                className="w-full rounded-lg border border-[#dcd9d2] bg-[#fdfcf9] px-4 py-3 text-sm text-[#163f63] outline-none focus:border-[#163f63]"
              />
            </div>

            <div>
              <label
                htmlFor="password_confirmation"
                className="mb-2 block text-xs font-semibold text-[#163f63]"
              >
                Confirmar senha
              </label>

              <input
                ref={confirmPasswordInputRef}
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                placeholder="Digite a senha novamente"
                autoComplete="new-password"
                className="w-full rounded-lg border border-[#dcd9d2] bg-[#fdfcf9] px-4 py-3 text-sm text-[#163f63] outline-none focus:border-[#163f63]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#163f63] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3452]"
            >
              Criar conta
            </button>
          </form>

          <p className="auth-troca">
            Já possui conta?{' '}
            <Link to="/login" className="auth-troca-link">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Cadastro;