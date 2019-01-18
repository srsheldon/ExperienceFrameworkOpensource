customElements.whenDefined('ef-button').then(() => {
    console.log('ef-button defined');



    const efButton = document.querySelector('#efButtonExample');

    console.assert(efButton.hasAttribute('is'));

    efButton.click();

});
  