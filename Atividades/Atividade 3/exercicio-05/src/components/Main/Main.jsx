import Hero from "../Hero/Hero";
import BookShowcase from "../BookShowcase/BookShowcase";
import Filters from "../Filters/Filters";
import './style.css'

function Main({ livros }) {

    return (
        <main>
            <Hero></Hero>'
            <Filters></Filters>'
            <div className="container-livros">
                <BookShowcase livros={livros} />
            </div>
        </main>
    );
}

export default Main;