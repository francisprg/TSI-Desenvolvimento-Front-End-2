

import SearchHero from "../SearchHero/SearchHero";
import './style.css';


function Hero() {
    return (
        <section className="hero-busca">
            <p className="hero-busca-eyebrow">LiAqui</p>
            <h1 className="hero-busca-titulo">O que você vai ler hoje?</h1>
            <p className="hero-busca-sub">
                Explore uma curadoria de obras clássicas e contemporâneas. Avalie, resenhe e organize os livros que já leu.
            </p>
            <SearchHero></SearchHero>
        </section>
    );
}

export default Hero;