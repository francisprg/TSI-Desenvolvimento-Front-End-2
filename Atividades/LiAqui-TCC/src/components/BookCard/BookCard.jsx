import './style.css'

function BookCard({ livro }) {
  return (
    <div className="cartao-livro">
      <img src={livro.capa} alt={livro.titulo} />
      <span>{livro.titulo}</span>
    </div>
  );
}

export default BookCard;
