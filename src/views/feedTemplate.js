import {firebaseFunctions} from '../lib/firebase.js'

export const feed  = () =>{
    const feedPrincipal = document.createElement('div');
    const viewFeed = `
    <h1>No soy un muro soy un mounstruo</h1>
    <button id ="closed"> cerrar Sesión jeje</button>

`;
feedPrincipal.innerHTML = viewFeed;

const cerrarSesion = feedPrincipal.querySelector('#closed');
cerrarSesion.addEventListener('click', () => {
firebaseFunctions.closeSesion();
});

return feedPrincipal;
};