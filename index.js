const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function calcola() {
    const numeroRomano = document.getElementById('numero-romano').value;
    console.log('numero romano', numeroRomano);

    let valore = map[numeroRomano[numeroRomano.length - 1]];
    for (let i = numeroRomano.length - 2; i >= 0; i--) {
        console.log(`posizione ${i} = ${numeroRomano[i]}`);
        if (map[numeroRomano[i]] < map[numeroRomano[i + 1]]) {
            valore -= map[numeroRomano[i]];
        } else {
            valore += map[numeroRomano[i]];
        }
    }
    console.log('valore del numero = ' + valore);
    document.getElementById('numero-arabo').innerText = valore;
}