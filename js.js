const logs = document.getElementById("logs");
let PirkumaSaraksts = []

document.getElementById('poga').addEventListener('click', () => {
    logs.style.display = 'block';
});

document.getElementById('poga').addEventListener('click', () => {
    document.getElementById('poga').style.display = 'none';

});

document.getElementById('poga2').addEventListener('click', () => {
    logs.style.display = 'none';

    let saraksts = { Produkts: Produkts.value, Daudzums: Daudzums.value };

    Produkts.value = "";
    Daudzums.value = "";

    PirkumaSaraksts.push(saraksts);

    render();

});

function render() {
    let Produkti = document.getElementById("saraksts")
    Produkti.innerHTML = "";

    for (let i = 0; i < PirkumaSaraksts.length; i++) {
        let pirkums = `
        <div class="pirkums">
            <h3>Produkts: ${PirkumaSaraksts[i].Produkts}</h3>
            <h4>Daudzums: ${PirkumaSaraksts[i].Daudzums}</h4>
        </div>`

        Produkti.innerHTML += pirkums;
    }

}



document.getElementById('poga2').addEventListener('click', () => {
    document.getElementById('poga').style.display = 'block';

});