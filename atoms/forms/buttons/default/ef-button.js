/**
 * @class
 */
class EfButton extends HTMLButtonElement {
    constructor() {
        super();
        this.style = `
        color:
        rgb(
          var(--accessible-color),
          var(--accessible-color),
          var(--accessible-color)
        );
        background-color:
        rgb(
          var(--red),
          var(--green),
          var(--blue)
        );
        height: 2.5rem;

        @supports (--foo: green) {
            background-color: blue;
        }
        `;
        this.vibrate = this.vibrate.bind(this);
        this.checkContrast = this.checkContrast.bind(this);
        this.classList.add('ef-button');
        this.setAttribute('is', 'ef-button');
    }

    _upgradeProperty(prop) {
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

    vibrate() {
        console.log('vibrate called');
        //const vibratePattern = this.dataset.vibration.split(',').map(Number);
        const vibratePatternString = this.dataset.vibration;

        try {
            if (vibratePatternString && 'vibrate' in navigator) {
                console.log('here');
                const vibratePattern = vibratePatternString.split(',').map(Number);
                navigator.vibrate([vibratePattern]);
            } else {
                console.log('no!');
                throw new Error(`The data-vibration attribute is ${vibratePatternString}. The vibrate function is ${typeof navigator.vibrate ? 'supported': 'unsupported'}`);
            }
        } catch (error) {
            console.error(`${error}`);
        }

    }

    connectedCallback() {
        console.log('connectedCallback');
        
        this._upgradeProperty('data-appearance');
        this._upgradeProperty('data-color');
        this._upgradeProperty('data-vibration');
        
        
        this.addEventListener('click', this.vibrate);

        //const efButtonStyle = document.createElement('style');
        
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
        
        this.removeEventListener('click', this.vibrate);
    }

    


    static get observedAttributes() {
        console.log('observing');
        return ['data-appearance', 'data-color', 'data-vibration'];
    }

    static get is() {
        return 'ef-button';
    }

    checkContrast () {
        //https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=115F54&api

        //console.log(this.style);
        console.log(this.style.backgroundColor);
        console.log(this.style.color);
    }


    get appearance() {
        return this.getAttribute('data-appearance');
    }

    set appearance(value) {
        if (value) {
            this.setAttribute('data-appearance', String(value));
        } else{
            this.removeAttribute('data-appearance');
        }
    }

    get color() {
        console.log('getting color');
        return this.getAttribute('data-color');
    }

    set color(value) {
        console.log('setting color');
        if (value) {
            console.log('setting value for color');
            this.setAttribute('data-color', String(value));
        } else {
            console.log('remove value for color');
            this.removeAttribute('data-color');
        }

    }

    get vibration() {
        console.log('getting vibrate');
        return this.getAttribute('data-vibration');
    }

    set vibration(value) {
        console.log('setting vibrate');
        if (value) {
            console.log('setting value for vib');
            this.setAttribute('data-vibration', String(value));
        } else {
            console.log('remove value for vib');
            this.removeAttribute('data-vibration');
        }
    }


}

customElements.define(EfButton.is, EfButton, { extends: 'button' });  