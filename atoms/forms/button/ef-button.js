
class EfButton extends HTMLButtonElement {
    constructor() {
        super();
        // this.style = `
        //     border-radius: 50%;
        // `;
        
        this.vibrate = this.vibrate.bind(this);
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

        // const hasValue = newValue !== null;
        // switch (name) {
        //     case 'data-appearance':
        //         this.setAttribute('data-appearance', String(hasValue));
        //         break;
        //     case 'data-vibration':
        //         this.setAttribute('data-vibration', String(hasValue));
        //         break;
        // }


    }

    connectedCallback() {
        console.log('connectedCallback');
        
        this._upgradeProperty('data-appearance');
        this._upgradeProperty('data-vibration');
        
        
        this.addEventListener('ontouchstart', this.vibrate);
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
        
        this.removeEventListener('ontouchstart', this.vibrate);
    }

    vibrate() {
        console.log('vibrate called');
        const vibratePattern = this.dataset.vibrate.split(',').map(Number);

        if (typeof window.navigator.vibrate === "function") { 
            window.navigator.vibrate([vibratePattern]);
        }
    }


    static get observedAttributes() {
        console.log('observing');
        return ['data-appearance', 'data-vibration'];
    }

    get appearance() {
        if (this.hasAttribute('data-appearance')) {
            return this.getAttribute('data-appearance');
        }
    }

    set appearance(value) {
        if (value) {
            this.setAttribute('data-appearance', String(value));
        } else{
            this.removeAttribute('data-appearance');
        }
    }


    get vibration() {
        return this.getAttribute('data-vibration');
    }

    set vibration(value) {
        if (value) {
            console.log('setting value for vib');
            this.setAttribute('data-vibration', String(value));
        } else {
            console.log('remove value for vib');
            this.removeAttribute('data-vibration');
        }
    }


}

customElements.define("ef-button", EfButton, { extends: "button" });
  