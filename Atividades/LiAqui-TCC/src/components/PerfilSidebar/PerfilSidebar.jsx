
function PerfilSidebar({ leitor, totalResenhas }) {
  return (
    <aside className="self-start rounded-xl border border-[#e3dfd5] bg-white p-7 text-center">
      {leitor.foto && <img src={leitor.foto} alt={leitor.nome ? `Foto de ${leitor.nome}` : 'Foto de perfil'} className="mb-4 size-28 rounded-full object-cover" />}
      {leitor.nome && <h2 className="mb-1.5 text-2xl wrap-anywhere">{leitor.nome}</h2>}
      {leitor.apelido && <span className="text-sm text-[#5a6a7e] wrap-anywhere">@{leitor.apelido}</span>}
      {leitor.bio && <p className="my-4 text-sm leading-relaxed text-[#5a6a7e] wrap-anywhere">{leitor.bio}</p>}

      <div className="my-6 flex justify-between border-y border-[#e3dfd5] py-4">
        <span>Resenhas</span>
        <strong>{totalResenhas}</strong>
      </div>

      <div className="grid gap-3">
        <button type="button" className="cursor-pointer rounded-md border-0 bg-[#16304d] p-3 font-semibold text-white disabled:cursor-default disabled:opacity-55 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#3c6e9c]" disabled>Editar perfil</button>
        <button type="button" className="border-0 bg-transparent p-2 text-sm text-[#a33535]" disabled>Deletar minha conta</button>
      </div>
    </aside>
  );
}

export default PerfilSidebar;
