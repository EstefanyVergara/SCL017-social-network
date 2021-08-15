export const login = () =>{
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
            <div class="option">Ingresa con <a id="googleLogin"></a><br>
                <img src="img/google.png" id="googleLogin" class="googleButton"></a>
            </div>
                <p class="option"> ¿No tienes cuenta? </p> <a class="redirection" id="userReg" href="#/register">Registrate aquí</a>
            </div>
        </div>
    </div>
`;

const divElement = document.createElement('div');
divElement.innerHTML = viewLogin;


//   // funcionalidad del login sin google
//   const loginForm = divElement.querySelector('#loginForm');
//   loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = loginElement.querySelector('#loginMail').value;
//     const password = loginElement.querySelector('#loginPass').value;
//     firebaseFunctions.loginAccount(email, password);
//     window.location.hash = '#/feed';
//   });



return divElement;
}