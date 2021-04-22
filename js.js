const logs = document.getElementById("logs");

document.getElementById('poga').addEventListener('click', () => {
    logs.style.display = 'block';
    console.log("strāda1")
});

document.getElementById('poga').addEventListener('click', () => {
    document.getElementById('poga').style.display = 'none';

});

document.getElementById('poga2').addEventListener('click', () => {
    logs.style.display = 'none';

});

document.getElementById('poga2').addEventListener('click', () => {
    document.getElementById('poga').style.display = 'block';

});