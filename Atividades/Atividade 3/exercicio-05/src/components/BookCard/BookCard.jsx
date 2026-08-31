import './style.css'

function BookCard({ livro }) {
  return (
    <div className="cartao-livro">
      <a href="#">
        <img src={livro.capa} alt={livro.titulo} />
        <span>{livro.titulo}</span>
      </a>
    </div>
  );
}

export default BookCard;