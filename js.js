const logs = document.getElementById("logs");
let PirkumaSaraksts = []

/*
window.addEventListener("load", () => {
    PirkumaSaraksts = JSON.parse(localStorage.getItem("PirkumaSaraksts") || "[]");
    render();
});
*/

document.getElementById('poga').addEventListener('click', () => {
    logs.style.display = 'block';
});

document.getElementById('poga2').addEventListener('click', () => {
    logs.style.display = 'none';

    let saraksts = { Produkts: Produkts.value, Daudzums: Daudzums.value };

    if (Produkts.value === "") {
        alert("Ierakstat produktu!");
        logs.style.display = 'block';

    } else if (Daudzums.value === "") {
        alert("Ierakstat Daudzumu!");
        logs.style.display = 'block';

    } else {
        Produkts.value = "";
        Daudzums.value = "";
        PirkumaSaraksts.push(saraksts);
        render();
    };
});

function render() {
    let Produkti = document.getElementById("saraksts");
    Produkti.innerHTML = "";

    for (let i = 0; i < PirkumaSaraksts.length; i++) {
        let pirkums = `
        <div class="pirkums">
            <h3>Produkts: ${PirkumaSaraksts[i].Produkts}</h3>
            <h4>Daudzums: ${PirkumaSaraksts[i].Daudzums}</h4>
            <image src="remove.png" class ="close" >
        </div>`

        Produkti.innerHTML += pirkums;
    };

    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            PirkumaSaraksts = []
        };
    };
};


document.getElementById('poga2').addEventListener('click', () => {
    document.getElementById('poga').style.display = 'block';
});
//localStorage.setItem("PirkumaSaraksts", JSON.stringify(PirkumaSaraksts));