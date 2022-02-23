const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const display_hex = document.querySelector("#hex_code");
const hex_numbers = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', changeHex);

function changeHex () {
    let hex = '#';
    for( let i=0; i<6; i++ ) {
        let index = Math.floor(Math.random() * hex_numbers.length);
        hex += hex_numbers[index];
    }
    body.style.backgroundColor = hex;
    display_hex.innerHTML = `The hex code is: ${hex}`;
}
