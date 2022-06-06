import { Component } from './component.js';

export class PokeList extends Component {
    template = '';
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outerRender(this.selector);
    }

    createTemplate() {
        return `<main><h2>Lista Pokemons con API</h2></main>`;
    }
}
