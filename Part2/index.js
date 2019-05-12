let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');

function setCard() {
    document.getElementById(idInput.value).style.color = colorInput.value;
}

function reset() {
    document.getElementById('diamonds').style.color = '';
    document.getElementById('hearts').style.color = '';
    document.getElementById('clubs').style.color = '';
    document.getElementById('spades').stlye.color = '';
}