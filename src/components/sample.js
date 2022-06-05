import { Component } from './component';

export class Header extends Component {
    template = '';
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outerRender(this.selector);
    }

    createTemplate() {
        return ``;
    }
}
