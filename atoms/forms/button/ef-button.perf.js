
console.time("Add 100,000 buttons test");
for (var i = 1; i < 100000; i++) {
    let efButton = document.createElement('button', { is: "ef-button" });
    efButton.id = `efButton${i}`;
    document.body.appendChild(efButton);
}
console.timeEnd("Add 100,000 buttons test");
