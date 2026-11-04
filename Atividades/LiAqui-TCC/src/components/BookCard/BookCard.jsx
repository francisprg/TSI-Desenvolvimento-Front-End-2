function BookCard({ livro }) {
  return (
   <div className="flex flex-col items-start gap-3 rounded-lg text-[#16304d] transition duration-300 ease-[ease] hover:-translate-y-1.5 hover:shadow-[0_1rem_2rem_rgba(22,48,79,0.16)]">
      <img
        src={livro.capa}
        alt={livro.titulo}
        className="aspect-[2/3] w-full rounded-lg object-cover shadow-[0_0.25rem_0.75rem_rgba(0,0,0,0.14)]"
      />
      <span className="text-left text-base leading-snug font-semibold">
        {livro.titulo}
      </span>
    </div>
  );
}

export default BookCard;
