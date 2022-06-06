import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { PokeList } from './components/poke.list.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const path = location.pathname.split('/');
        if (
            path[path.length - 1] === '' ||
            path[path.length - 1] === 'index.html'
        ) {
            commonComponents();
            new PokeList('slot.main-Page');
        } else if (path[path.length - 1] === 'mispokemon.html') {
            commonComponents();
            //aquí debe cargar componrnte new Milista x ej
        } else if (path[path.length - 1] === 'detalles.html') {
            commonComponents();
        }
        console.log('listener funciona');
    });
})();

function commonComponents() {
    console.log('App Lista');
    new Header('slot.header');
    new Footer('slot.footer');
}
