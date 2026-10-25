
import { useContext } from "react";
import BookCard from "../BookCard/BookCard";
import "./style.css";
import MockDadosContext from "../../contexts/MockDadosContext";

function BookShowcase() {
  const { Livros } = useContext(MockDadosContext);

  return (
    <section className="container-livros">
      <div className="lista-livros">
        {Livros.map((livro) => (
          <BookCard key={livro.id} livro={livro} />
        ))}
      </div>
    </section>
  );
}

export default BookShowcase;
