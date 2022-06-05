import { Component } from './component.js';

export class Menu extends Component {
    template = '';
    menu;
    constructor(selector, menu) {
        super();
        this.menu = menu;
        this.selector = selector;
        this.template = this.createTemplate();
        this.outerRender(this.selector);
    }

    createTemplate() {
        let htmlitems = '';
        this.menu.forEach((item) => {
            htmlitems += `<li><a href="${item.path}">${item.label}</a></li> `;
        });
        return `<nav><ul>${htmlitems}</ul></nav>`;
    }
}
