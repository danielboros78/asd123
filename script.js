function korSzamol() {
    let sugar = document.getElementById('sugar').value;

    let Kkerulet = parseInt(2 * sugar * Math.PI);
    let Kterulet = parseInt(Math.pow(sugar,2) * Math.PI);
    document.getElementById('Kkerulet').value = Kkerulet;
    document.getElementById('Kterulet').value = Kterulet;
}

function teglalapSzamol() {
    let hossz = document.getElementById('hossz').value;
    let szelesseg = document.getElementById('szelesseg').value;

    let teglaKerulet = parseInt((hossz * 2) + (szelesseg * 2));
    let teglaTerulet = parseInt(hossz * szelesseg);

    document.getElementById('tlKerulet').value = teglaKerulet;
    document.getElementById('tlTerulet').value = teglaTerulet;
}