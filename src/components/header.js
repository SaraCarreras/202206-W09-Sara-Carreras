import { Component } from './component.js';

export class Header extends Component {
    template = '';
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outerRender(this.selector);
    }

    createTemplate() {
        return `<header class="header">
                        <h1 class="header-title">Pokémons!🐥 </h1>
                            <nav>
                                <ul>
                                    <li><a href="./index.html">Ver todos los Pokémons🐾 </a></li>
                                     <li><a href="./index.html">Ver Mis Pokémons💜</a></li>
                                </ul>
                            </nav>
                </header>`;
    }
}
