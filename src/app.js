import { Header } from './components/header.js';
import { Footer } from './components/footer.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const path = location.pathname.split('/');
        if (
            path[path.length - 1] === '' ||
            path[path.length - 1] === 'index.html'
        ) {
            index();
        } else if (path[path.length - 1] === 'mispokemon.html') {
            myPokemons();
            //aquí debe cargar componrnte new Milista x ej
        } else if (path[path.length - 1] === 'detalles.html') {
            details();
        }
        console.log('listener funciona');
    });
})();

function index() {
    commonComponents();
    //aquí irá new PokemonsList
}
function myPokemons() {
    commonComponents();
}
function details() {
    commonComponents();
}

function commonComponents() {
    console.log('App Lista');
    new Header('slot.header');
    new Footer('slot.footer');
}
