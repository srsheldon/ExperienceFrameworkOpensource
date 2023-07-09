
class EfHtml extends HTMLHtmlElement {

    constructor() {
        super();

        this.lang = 'en-US';
        this.classList.add('ef-html');
        this.appName='appTest';
    }

    _upgradeProperty(prop) {
        console.log(`updating ${prop}`);
        if (this.hasOwnProperty(prop)) {
          let value = this[prop];
          delete this[prop];
          this[prop] = value;
        }
      }
    

    adoptedCallback() {
        console.log('adoptedCallback');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attributeChangedCallback');
        console.info(`name is ${name}`);
        console.info(`oldValue is ${oldValue}`);
        console.info(`newValue is ${newValue}`);

    }

    connectedCallback() {
        console.log('connectedCallback');
        this._upgradeProperty('lang');
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
    }

    


    static get observedAttributes() {
        console.log('observing');
        return ['lang'];
    }

    static get is() {
        return 'ef-html';
    }

    get lang() {
        return this.getAttribute('lang');
    }

    set lang(value = 'en') {
        if (value) {
            this.setAttribute('lang', String(value));
        } else {
            this.removeAttribute('lang');
        }
    }

}

customElements.define(EfHtml.is, EfHtml, { extends: "html" }); 
