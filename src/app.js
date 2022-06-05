import { Header } from './components/header.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        app();
        console.log('listener funciona');
    });
})();

function app() {
    console.log('App Lista');
    new Header('slot.header');
}
