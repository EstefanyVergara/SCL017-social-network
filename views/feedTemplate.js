import { firebaseFunctions } from "../lib/firebase.js";

export const feed = () => {
  const feedPrincipal = document.createElement("div");
  const viewFeed = /*html*/ `
    <div class ="containerPost" id="containerPost">
    <div class ="formPost" id="postForm">
        <div class ="profileData">
        <img alt="" id="imgUser" class= "imgUser"/><br>
        <div class ="nameUser" id="nameUser"></div>
        </div>
        </div>  
        <input type= 'text' id= "commentPost" class="commentPost" placeholder= "¿Qué cocino hoy?" required> <br>
        <form class="botones">
        <button class="icon"><i class="fas fa-camera"></i></button>   
        <button type='submit' class="publicButton" id="publicButton">PUBLICAR</button>       
        </form>  
    </div>
    <button id ="closed"> cerrar Sesión jeje</button>

`;

  feedPrincipal.innerHTML = viewFeed;

  const userProfile = feedPrincipal.querySelector("#nameUser");
  const userImg = feedPrincipal.querySelector("#imgUser");
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userProfile.innerHTML = user.displayName;
      userImg.src = user.photoURL;
      console.log(user.email);
    } else {
    console.log("no existe user");
    }
  });

  const cerrarSesion = feedPrincipal.querySelector("#closed");
  cerrarSesion.addEventListener("click", () => {
    firebaseFunctions.closeSesion();
  });

  return feedPrincipal;
};
