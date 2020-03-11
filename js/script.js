const navOpener = document.querySelector('#navOpener');
const navCloser = document.querySelector('#navCloser');
const mainNAv = document.querySelector('.main_navigation');
const opener = () => mainNAv.classList.add('active');
const closer = () => mainNAv.classList.remove('active');

navOpener.onclick = () => opener();
navOpener.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
        opener();
    }
});

navCloser.onclick = () => closer();
navCloser.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
        closer();
    }
});