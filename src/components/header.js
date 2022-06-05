import { Component } from './component.js';
import { Menu } from './menu.js';

export class Header extends Component {
    template = '';
    menu;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outerRender(this.selector);
        this.menu = [
            { path: './index.html', label: 'Ver todos los Pokémons🐾 ' },
            { path: './mispokemon.html', label: 'Ver Mis Pokémons💜' },
            { path: './detalles.html', label: 'Detalles de los Pokémon💜' }, //esto será una pág que aparece al darle al pokemon; pasando la id del PK ala url
        ];
        new Menu('slot.menu', this.menu);
    }

    createTemplate() {
        return `<header class="header">
                        <h1 class="header-title">Pokémons!🐥 </h1>
                            <slot class="menu"></slot>
                </header>`;
    }
}
