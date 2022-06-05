import { Header } from './components/header.js';
import { Footer } from './components/footer.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        app();
        console.log('listener funciona');
    });
})();

function app() {
    console.log('App Lista');
    new Header('slot.header');
    new Footer('slot.footer');
}
