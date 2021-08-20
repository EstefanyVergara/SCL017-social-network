import { firebaseFunctions } from "../lib/firebase.js";

export const register = () => {
  const createAccount = document.createElement("div");
  const viewRegister = `
<div id="register" class="login"> 
<div class= "loginForm">

<b class="acount">Crea tu cuenta</b>
<p class="textRegister">¡Estás a un paso más cerca! </p>
    <img src="./img/logoquecocino.png" class="logotype">  
    <div class ="textLoginForm"> ¡Crea maravillas con lo que tienes!</div>
    <form id="registerForm">
        <input type= 'text' id= "registerUser" class="inputForm" placeholder= "Nombre de usuario" required> <br>
        <input type= 'text' id= "registerMail" class="inputForm" placeholder= "Correo Electronico" required> <br>
        <input type= 'password' id= "registerPass" class="inputForm" placeholder="Contraseña" required> <br>
        <input type= 'password' id= "confirmedPass" class="inputForm" placeholder="Confirma tu contraseña" required> <br>
        <button type='submit' class="loginButton" id="registerButton">REGISTRAR</button>              
    </form>
    <p class="option">¿Ya tienes cuenta? </p> <a class="redirection" href="#/">Ingresa aquí</a>
    </div>
</div>
`;

createAccount.innerHTML = viewRegister;

const btnRegister = createAccount.querySelector("#registerForm");
btnRegister.addEventListener("submit", (e) => {
e.preventDefault();

const imputsRegister = {
username: btnRegister.querySelector("#registerUser").value,
email: btnRegister.querySelector("#registerMail").value,
password: btnRegister.querySelector("#registerPass").value,
confirmedPassword: btnRegister.querySelector("#confirmedPass").value,
};

if (imputsRegister.password === imputsRegister.confirmedPassword) {
firebaseFunctions.registerUser(
imputsRegister.username,
imputsRegister.email,
imputsRegister.password
);
} else {
alert("La contraseña no coincide");
}
});

return createAccount;
};
