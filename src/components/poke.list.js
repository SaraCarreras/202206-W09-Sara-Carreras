import { Component } from './component.js';
import { POKEMONS } from './poke.arr.prov.js'; //sustituir por pokeAPI
//AQÍ TB SE METEN
export class PokeList extends Component {
    pokemonsArr;
    template = '';

    constructor(selector) {
        super();
        this.pokemonsArr = POKEMONS;
        this.selector = selector;
        this.template = this.createTemplate();
        this.outerRender(this.selector);
        this.manageComponent();
    }

    createTemplate() {
        //en el href irá la url y con $ metemos nombre del poke pa qe telleve ahí
        let htmlItems = '';
        this.pokemonsArr.forEach((item) => {
            htmlItems += `
            <li role="button">
                <a class="pokelist-button__pokemon" role="button" data-id="${item.id}" href=""
                    >${item.name}
                </a>
            </li>`;
        });
        return `<main><h2>Lista Pokemons con API</h2><ul class="pokelist"> ${htmlItems} </ul> </main>`;
    }

    manageComponent() {
        document
            .querySelectorAll('.pokelist-button__pokemon')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
    }

    handlerButton(ev) {
        const selectedId = ev.target.dataset.id;
        console.log('click');
        console.log(selectedId);
    }
}
