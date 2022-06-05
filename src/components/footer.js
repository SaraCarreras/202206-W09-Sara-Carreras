import { Component } from './component.js';

export class Footer extends Component {
    template = '';
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outerRender(this.selector);
    }

    createTemplate() {
        return ` 
          <footer class="footer">
            <address>by Sara Carreras✨</address>
        </footer>`;
    }
}
