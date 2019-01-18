
// export default function defineEfButton(w, d) {
    
//     class EfButton extends HTMLButtonElement {
//         constructor() {
//             super();
    
//             // this.addEventListener("click", () => {
//             //     // Draw some fancy animation effects!
//             // });
//         }
    
//         adoptedCallback() {
//             console.log('adoptedCallback');
//         }
    
//         attributeChangedCallback() {
//             console.log('attributeChangedCallback');
//         }
    
//         connectedCallback() {
//             console.log('connectedCallback');
//         }
    
//         disconnectedCallback() {
//             console.log('disconnectedCallback');
//         }
    
//     }

//     return customElements.define("ef-button", EfButton, { extends: "button" });
// }(window, document);


class EfButton extends HTMLButtonElement {
    constructor() {
        super();
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
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
    }

    static get observedAttributes() {
        return ['disabled', 'open', 'data-variant'];
    }


    get dataVariant() {
        return this.hasAttribute('data-variant');
    }
    
    set dataVariant(val) {
        if (val) {
            this.setAttribute('data-variant', val);
        } else {
            this.removeAttribute('data-variant');
        }
    }
    

}

customElements.define("ef-button", EfButton, { extends: "button" });
  