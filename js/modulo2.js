/* 1º Exercício */

let botaoCriar = document.querySelector('#botao');
let novoQuadrado = document.querySelector('#quadrado');

botaoCriar.onclick = function() {
    let quadradoVermelho = document.createElement('div');
    quadradoVermelho.style.width = '100px';
    quadradoVermelho.style.height = '100px';
    quadradoVermelho.style.margin = '5px';
    quadradoVermelho.style.backgroundColor = 'red';

    novoQuadrado.appendChild(quadradoVermelho);

/* 2º Exercício */

    quadradoVermelho.onmouseover = function() {
        quadradoVermelho.style.backgroundColor = getRandomColor();
    };
};

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    var newColor = getRandomColor(); // #E943F0

/* 3º e 4º Exercícios */

    var nomes = ['Diego', 'Gabriel', 'Lucas'];

    let listElement = document.querySelector('ul');
    let inputElement = document.querySelector('input');

    function addItem(text) {
        let liElement = document.createElement('li');
        let textElement = document.createTextNode(text);

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    };

    function adicionar() {
        addItem(inputElement.value);
        inputElement.value = "";
    };

    for (nome of nomes) {
        addItem(nome);
    };