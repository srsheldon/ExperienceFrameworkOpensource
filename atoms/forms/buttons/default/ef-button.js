

class EfButton extends HTMLButtonElement {
    constructor() {
        super();
        // this.style = `
        //     border-radius: 50%;
        // `;
        this.style = `
            background-color: var(--primary, green);
        `;
        this.vibrate = this.vibrate.bind(this);
        this.classList.add('ef-button');
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

        //const hasValue = newValue !== null;

        // switch (name) {
        //     case 'data-appearance': 
        //         if (this.getAttribute(name) === !hasValue) {
        //             this.appearance = String(hasValue);
        //         }
        //         //this.setAttribute('data-appearance', String(hasValue));
                
        //         break;
        //     case 'data-vibration':
        //         if (this.getAttribute(name) === !hasValue) {
        //             this.vibrate = String(hasValue);
        //         }
            
        //         break;
        //     default:
        //         console.log('his default');
        // }

        // switch(name) {
        //     case 'data-color':
        //         const bgColorRegex = //gim
        //         if(newValue !== oldValue) {
        //             this.style
        //         }
        //         break;
        //     default:
        //         console.log('his default');
        // }

    }

    vibrate() {
        console.log('vibrate called');
        const vibratePattern = this.dataset.vibration.split(',').map(Number);

        // if (typeof window.navigator.vibrate === "function") { 
        //     window.navigator.vibrate([vibratePattern]);
        // }

        window.navigator.vibrate([vibratePattern]);
    }

    connectedCallback() {
        console.log('connectedCallback');
        
        this._upgradeProperty('data-appearance');
        this._upgradeProperty('data-color');
        this._upgradeProperty('data-vibration');
        
        
        this.addEventListener('click', this.vibrate);
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
        
        this.removeEventListener('click', this.vibrate);
    }

    


    static get observedAttributes() {
        console.log('observing');
        return ['data-appearance', 'data-color', 'data-vibration'];
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

customElements.define("ef-button", EfButton, { extends: "button" });  