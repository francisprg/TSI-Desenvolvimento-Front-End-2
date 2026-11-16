import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] flex items-center justify-center px-6">

      <div className="w-full max-w-xl text-center">

        <h1 className="font-serif text-7xl text-[#173653] mb-2">
          404
        </h1>

        <img
          src="/public/imagens/dog-404.png"
          alt="Cachorro procurando uma página"
          className="w-85 h-85 object-contain mx-auto"
        />

        <h2 className="font-serif text-3xl text-[#173653] mt-4 mb-3">
          Parece que nos perdemos...
        </h2>

        <p className="text-[#53677D] text-base leading-relaxed max-w-md mx-auto mb-8">
          Nosso amigo procurou por toda a estante, mas não
          encontrou a página que você está procurando.
        </p>

        <Link
          to="/"
          className="
            inline-flex items-center justify-center
            bg-[#173653]
            text-white
            font-semibold
            px-8 py-3
            rounded-md
            hover:bg-[#244968]
            transition-colors
          "
        >
          Voltar para o início
        </Link>

        <p className="text-sm text-[#718096] mt-8">
          LiAqui — Seu diário literário
        </p>

      </div>
    </div>
  );
}

export default NotFoundPage;