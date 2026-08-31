import BookCard from "../BookCard/BookCard";
import './style.css'

function BookShowcase({ livros }) {
  return (
    <section className="container-livros">
      <div className="lista-livros">
        {livros.map((livro) => (
          <BookCard key={livro.id} livro={livro} />
        ))}
      </div>
    </section>
  );
}

export default BookShowcase;