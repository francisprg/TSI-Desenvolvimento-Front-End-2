import { useContext } from "react";
import BookCard from "../BookCard/BookCard";
import MockDadosContext from "../../contexts/MockDadosContext";

function BookShowcase() {
  const { Livros } = useContext(MockDadosContext);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6 lg:px-5 lg:pt-7 lg:pb-12">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-5 lg:grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))] lg:gap-6 empty:flex empty:items-center empty:justify-center empty:col-span-full empty:min-h-48 empty:p-8 empty:text-[#aab4c0] empty:text-sm empty:italic empty:text-center empty:bg-white empty:border-2 empty:border-dashed empty:border-[#e4dcc9] empty:rounded-xl">
        {Livros.map((livro) => (
          <BookCard key={livro.id} livro={livro} />
        ))}
      </div>
    </section>
  );
}

export default BookShowcase;
