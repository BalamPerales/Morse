import './css/main.css';

const codigoMorse = {
    'A': '.-',     'B': '-...',   'C': '-.-.',   'D': '-..',
    'E': '.',      'F': '..-.',   'G': '--.',    'H': '....',
    'I': '..',     'J': '.---',   'K': '-.-',    'L': '.-..',
    'M': '--',     'N': '-.',     'O': '---',    'P': '.--.',
    'Q': '--.-',   'R': '.-.',    'S': '...',    'T': '-',
    'U': '..-',    'V': '...-',   'W': '.--',    'X': '-..-',
    'Y': '-.--',   'Z': '--..',
    '0': '-----',  '1': '.----',  '2': '..---',  '3': '...--',  '4': '....-',
    '5': '.....',  '6': '-....',  '7': '--...',  '8': '---..',  '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.',
    '!': '-.-.--', '/': '-..-.',  '(': '-.--.',  ')': '-.--.-',
    '&': '.-...',  ':': '---...', ';': '-.-.-.', '=': '-...-',
    '+': '.-.-.',  '-': '-....-', '_': '..--.-', '"': '.-..-.',
    '$': '...-..-', '@': '.--.-.'
};

const morseATexto = Object.fromEntries(
    Object.entries(codigoMorse).map(([letra, morse]) => [morse, letra])
);

const inputTexto = document.getElementById("texto");
const selectConversion = document.getElementById("tipo-conversion");
const outputResultado = document.getElementById("resultado");

document.getElementById("btn-procesar").addEventListener("click", () => {
    const texto = inputTexto.value.trim().toUpperCase();

    outputResultado.value = selectConversion.value === "texto-morse" ? texto.split('').map(c => c === ' ' ? '/' : codigoMorse[c] || c).join(' ') : texto.split(' / ').map(palabra => palabra.split(' ').map(codigo => morseATexto[codigo] || codigo).join('')).join(' ');
});

document.getElementById("btn-limpiar").addEventListener("click", () => {
    inputTexto.value = outputResultado.value = "";
});