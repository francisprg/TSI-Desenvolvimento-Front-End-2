

import SearchHero from "../Searchhero/SearchHero";


function Hero() {
    return (
        <section className="relative flex flex-col items-center bg-[radial-gradient(ellipse_34rem_20rem_at_20%_-20%,rgba(26,54,93,0.07),transparent_60%),radial-gradient(ellipse_28rem_18rem_at_100%_0%,rgba(60,110,156,0.08),transparent_60%),linear-gradient(180deg,#FAF6EE_80%,#ffffff_100%)] px-4 pt-12 pb-8 text-center sm:px-8 sm:pt-18 sm:pb-14">
            <p className="mb-3 font-['inter-medium',Arial,sans-serif] text-xs font-semibold tracking-[0.16em] text-[#3c6e9c] uppercase">LiAqui</p>
            <h1 className="mb-3 max-w-96 font-['libre-casion'] text-3xl leading-tight font-bold text-[#16304d] sm:max-w-lg sm:text-5xl">O que você vai ler hoje?</h1>
            <p className="mb-7 max-w-md text-sm leading-relaxed text-[#5a6a7e]">
                Explore uma curadoria de obras clássicas e contemporâneas. Avalie, resenhe e organize os livros que já leu.
            </p>
            <SearchHero></SearchHero>
        </section>
    );
}

export default Hero;
