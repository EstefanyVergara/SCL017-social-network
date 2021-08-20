import {firebaseFunctions} from '../lib/firebase.js'

export const login = () =>{
    const divElement = document.createElement('div');
    const viewLogin = `
    <div id="login" class="login">
        <div class= "loginForm">
            <img src="./img/logoquecocino.png" class="logotype">  
            <div class ="textLoginForm"> ¡Crea maravillas con lo que tienes!</div>
    <form id="loginForm">
        <input type= 'text' id= "loginMail" class="inputForm" placeholder= "Correo Electronico" required> <br>
        <input type= 'password' id= "loginPass" class="inputForm" placeholder="Contraseña" required> <br>
        <button type='submit' class="loginButton" id="loginButton">INGRESAR</button>              
    </form>
            <div> 
                <p class="option"> o </p>
            <div class="option">Ingresa con<br>
                <button id="googleLogin" class ="googleButton"> <img src="img/google.png"  class="googleButton"></a></button>
            </div>
                <p class="option"> ¿No tienes cuenta? </p> <a class="redirection" id="userReg" href="#/register">Registrate aquí</a>
            </div>
        </div>
    </div>
`;


divElement.innerHTML = viewLogin;

const btnGoogle = divElement.querySelector('#googleLogin');
btnGoogle.addEventListener('click',() =>{
firebaseFunctions.loginGoogle();
});

const loginForm = divElement.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
e.preventDefault();

const email = divElement.querySelector('#loginMail').value;
const password = divElement.querySelector('#loginPass').value;
});


return divElement;
}